import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';




import {
    fetchArticleRecommendations
} from '../services/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

// Создаем адаптер для нормализации данных и указываем по какому полю будет идти поиск при нормализации
// Обычно это айди сущности, который как раз берем из объекта комментария
const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

// Создаем селектор для получения всех комментариев статьи
export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState()
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice;