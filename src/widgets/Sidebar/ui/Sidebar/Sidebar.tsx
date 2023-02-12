import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'feature/ThemeSwitcher';
import { LangSwitcher } from 'feature/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>
                {t('Toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};


