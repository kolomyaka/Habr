import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {

    const { theme } = useTheme();

    const {
        className,
        children,
        isOpen,
        onClose
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: !isOpen,
        [cls[theme]]: true
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler);
        } else {
            window.removeEventListener('keydown', onKeyDownHandler);
        }
    }, [isOpen, onKeyDownHandler]);


    return (
        <Portal>
            <div data-testid={'modal'} className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};


