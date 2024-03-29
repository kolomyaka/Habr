import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/StoreProvider';

import { ArticleSortField, ArticleType } from '@/entities/Article';

import { OrderType } from '@/shared/types/types';

import { getArticlesPageInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articles/initArticlesPage', async (params, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        const order = params.get('order') as OrderType;
        const search = params.get('search');
        const sort = params.get('sort') as ArticleSortField;
        const type = params.get('type') as ArticleType;

        if (order) {
            dispatch(articlesPageActions.setOrder(order));
        }
        if (search) {
            dispatch(articlesPageActions.setSearch(search));
        }
        if (sort) {
            dispatch(articlesPageActions.setSort(sort));
        }
        if (type) {
            dispatch(articlesPageActions.setType(type));
        }

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
