import { ThemeSwitcher } from 'feature/ThemeSwitcher';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid={'sidebar'}
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid={'sidebar-toggle'}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_LIGHT}
                size={ButtonSize.M}
                className={cls.collapseBtn}
                round
            >
                {
                    collapsed ? '>' : '<'
                }
            </Button>
            <VStack gap={16} className={cls.items}>
                {sidebarItems.map((item) => (
                    <SidebarItem
                        collapsed={collapsed}
                        item={item}
                        key={item.path}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher short={collapsed} />
            </div>
        </div>
    );
});


