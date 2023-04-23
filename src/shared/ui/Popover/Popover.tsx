import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react';
import { Popover as HPopover } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import cls from './Popover.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PopoverProps {
    className?: string;
    trigger: ReactNode,
    children: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        trigger,
        children
    } = props;

    const { x, y, strategy, refs } = useFloating({
        placement: 'bottom-start',
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    return (
        <HPopover
            ref={refs.setReference}
            className={classNames(cls.popover, {}, [className])}
        >
            <HPopover.Button as={Fragment}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                ref={refs.setFloating}
                className={cls.panel}
                style={{
                    position: strategy,
                    top: y ?? 35,
                    left: x ?? 0,
                    width: '100%',
                }}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};


