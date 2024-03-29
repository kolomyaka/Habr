import type { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || 'small';
export const getArticlesLimit = (state: StateSchema) =>
    state.articlesPage?.limit;
export const getArticlesHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
export const getArticlesPageNumber = (state: StateSchema) =>
    state.articlesPage?.page || 1;
export const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order ?? 'asc';
export const getArticlesPageSortField = (state: StateSchema) =>
    state.articlesPage?.sort ?? 'createdAt';
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? 'ALL';
