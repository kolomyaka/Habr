import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { OrderType } from 'shared/types/types';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';

// Создаем адаптер для нормализации данных и указываем по какому полю будет идти поиск при нормализации
// Обычно это айди сущности, который как раз берем из объекта комментария
const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
});

// Создаем селектор для получения всех комментариев статьи
export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        order: 'asc',
        limit: 4,
        search: '',
        sort: ArticleSortField.CREATED
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.SMALL ? 9 : 4;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                state._inited = true;
                // Если в запросе есть параметр replace, то полностью обновляем наш стейт
                if (action.meta.arg.replace) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;