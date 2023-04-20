import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { getIsAdmin, getUserAuthData, userActions } from 'entities/User';

import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(getIsAdmin);
    const userAuthData = useSelector(getUserAuthData);
    
    const onLogoutHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!userAuthData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames(cls.avatarDropdown, {}, [className])}
            trigger={<Avatar size={40} src={userAuthData.avatar} />}
            items={[
                ...(isAdmin ?[{
                    content: t('Админка'),
                    href: RoutePath.admin_panel
                }]:[]),
                {
                    content: t('Профиль'),
                    href: `${RoutePath.profile}${userAuthData.id}`
                },
                {
                    content: t('Создать статью'),
                    href: RoutePath.article_create
                },
                {
                    content: t('Выйти'),
                    onClick: onLogoutHandler
                }
            ]}
        />
    );
});


