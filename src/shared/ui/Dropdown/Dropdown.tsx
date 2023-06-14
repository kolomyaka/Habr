import { autoUpdate, flip, shift, useFloating } from '@floating-ui/react';
import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink } from '../AppLink/AppLink';
import { Button, ButtonTheme } from '../Button/Button';

import cls from './Dropdown.module.scss';

interface DropdownItem {
    content?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItem[];
}

export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items } = props;

    const { x, y, strategy, refs } = useFloating({
        placement: 'bottom-start',
        middleware: [flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    return (
        <Menu
            as={'div'}
            ref={refs.setReference}
            className={classNames(cls.dropdown, {}, [className])}
        >
            <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                className={cls.items}
                ref={refs.setFloating}
                style={{
                    position: strategy,
                    top: y ?? 35,
                    left: x ?? 0,
                    width: 'max-content',
                }}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={item.onClick}
                            className={classNames(cls.item, {
                                [cls.active]: active,
                            })}
                        >
                            {item.content}
                        </Button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                as={AppLink}
                                className={cls.itemLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return <Menu.Item key={index}>{content}</Menu.Item>;
                })}
            </Menu.Items>
        </Menu>
    );
};
