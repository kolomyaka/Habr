import { ReactNode } from 'react';

import { useModal } from '@/shared/lib/hooks';

import { classNames, Mods } from '../../lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
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
    const { className, children, isOpen, lazy, onClose } = props;

    const { isMounted, close } = useModal({
        animationDelay: 3000,
        onClose,
        isOpen,
    });

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closed]: !isOpen,
    };

    return (
        <Portal>
            <div
                data-testid={'modal'}
                className={classNames(cls.modal, mods, [className])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
