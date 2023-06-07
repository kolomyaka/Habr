import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getIsAdmin, getUserAuthData, userActions } from '@/entities/User';

import { getRouteAdmin, getRouteArticleCreate, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar , Dropdown } from '@/shared/ui';

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
                    href: getRouteAdmin()
                }]:[]),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(userAuthData.id)
                },
                {
                    content: t('Создать статью'),
                    href: getRouteArticleCreate()
                },
                {
                    content: t('Выйти'),
                    onClick: onLogoutHandler
                }
            ]}
        />
    );
});


