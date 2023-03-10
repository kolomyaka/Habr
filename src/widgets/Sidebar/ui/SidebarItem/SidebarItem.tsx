import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppNavLink, AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppNavLink
            theme={AppNavLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppNavLink>
    );
});


