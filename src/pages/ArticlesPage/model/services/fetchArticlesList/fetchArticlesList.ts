import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from '../../selectors/articlesPage';

export interface fetchArticlesListProps {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articles/fetchArticlesList',
        async (props, thunkAPI) => {
            const { page } = props;
            const { extra, rejectWithValue, getState } = thunkAPI;
            const limit = getArticlesLimit(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles/', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit
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