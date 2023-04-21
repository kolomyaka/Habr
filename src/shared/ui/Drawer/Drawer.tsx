import { memo, ReactNode } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen
    };

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});


