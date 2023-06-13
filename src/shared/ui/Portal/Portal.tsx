import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode,
    container?: HTMLElement
}

export const Portal = (props : PortalProps) => {

    const {
        children,
        container = document.querySelector('.app') || document.body
    } = props;

    return createPortal(
        children,
        container
    );
};


