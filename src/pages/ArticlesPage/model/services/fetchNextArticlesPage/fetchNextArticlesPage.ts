import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesHasMore, getArticlesPageIsLoading, getArticlesPageNumber } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// Создаем санку, которую вызываем, когда хотим подгрузить следующую пачку данных
export const fetchNextArticlesPage = createAsyncThunk<
    // Санка ничего не возвращает, а просто вызывает что-то внутри себя
    void,
    void,
    ThunkConfig<string>
    >(
        'articles/fetchNextArticlesPage',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesPageNumber(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                const nextPage = page + 1;
                dispatch(articlesPageActions.setPage(nextPage));
                dispatch(fetchArticlesList({}));
            }
        }
    );