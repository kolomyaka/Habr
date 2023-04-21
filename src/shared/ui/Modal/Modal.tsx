import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Overlay } from 'shared/ui/Overlay/Overlay';

import { classNames, Mods } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    lazy?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {

    const {
        className,
        children,
        isOpen,
        lazy,
        onClose
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closed]: !isOpen,
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

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler);
        } else {
            window.removeEventListener('keydown', onKeyDownHandler);
        }
    }, [isOpen, onKeyDownHandler]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                data-testid={'modal'}
                className={classNames(cls.modal, mods, [className])}>
                <Overlay onClick={closeHandler } />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};


