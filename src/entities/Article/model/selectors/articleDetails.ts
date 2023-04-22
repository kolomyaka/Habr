import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';

import type { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getCanEditArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }

        return user.id === article.user.id;
    }
);