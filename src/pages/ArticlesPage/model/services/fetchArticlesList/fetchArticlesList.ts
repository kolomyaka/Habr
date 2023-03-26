import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesLimit,
    getArticlesPageNumber,
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSortField
} from '../../selectors/articlesPage';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export interface fetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articles/fetchArticlesList',
        async (props, thunkAPI) => {
            const { replace = false } = props;
            const { extra, rejectWithValue, getState } = thunkAPI;
            const limit = getArticlesLimit(getState());
            const page = getArticlesPageNumber(getState());
            const sort = getArticlesPageSortField(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());

            try {
                addQueryParams({
                    sort,order,search
                });
                const response = await extra.api.get<Article[]>('/articles/', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        replace:replace,
                        q: search
                    }
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        }
    );