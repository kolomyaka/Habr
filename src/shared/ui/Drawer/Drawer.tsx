import { memo, ReactNode, useCallback, useEffect } from 'react';

import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { classNames, Mods } from '@/shared/lib';
import { AnimationProvider, useAnimationModules } from '@/shared/lib';
import { useWindowSize } from '@/shared/lib';

import { Overlay } from '@/shared/ui';
import { Portal } from '@/shared/ui';

import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const DrawerContent = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose
    } = props;
    const { theme } = useTheme();
    const { Spring, Gesture } = useAnimationModules();
    const { height } = useWindowSize();
    const [ { y }, api ] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [ api ]);

    useEffect(() => {
        if (isOpen) openDrawer();
    }, [ api, isOpen, openDrawer ]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) return null;

    const mods: Mods = {
        [cls.opened]: isOpen
    };

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <Spring.a.div
                    style={{ display, bottom: `calc(-100vh + ${height - 300}px)`, y }}
                    className={cls.sheet}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationModules();
    return isLoaded ? <DrawerContent {...props} /> : null;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);