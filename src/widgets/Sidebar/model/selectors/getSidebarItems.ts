import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-icon.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import { RoutePath } from '@/shared/const/router';

import { SidebarItemType } from '../types/items';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList:SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: MainIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    Icon: ArticlesIcon,
                    authOnly: true
                }
            );
        }

        sidebarItemsList.push(
            {
                path: RoutePath.about,
                text: 'О сайте',
                Icon: AboutIcon,
            }
        );

        return sidebarItemsList;
    }
);