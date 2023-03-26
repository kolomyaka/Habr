import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { OrderType } from 'shared/types/types';
import { ArticleSortField } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articles/initArticlesPage',
        async (params, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const order = params.get('order') as OrderType;
                const search = params.get('search');
                const sort = params.get('sort') as ArticleSortField;

                if (order) {
                    dispatch(articlesPageActions.setOrder(order));
                }
                if (search) {
                    dispatch(articlesPageActions.setSearch(search));
                }
                if (sort) {
                    dispatch(articlesPageActions.setSort(sort));
                }
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        }
    );