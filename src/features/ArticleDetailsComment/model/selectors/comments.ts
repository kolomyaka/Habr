import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsComments?.isLoading;
export const getArticleDetailsCommentsError = (state: StateSchema) =>
    state.articleDetailsComments?.error;

export const getArticleDetailsCommentText = (state: StateSchema) =>
    state.articleDetailsCommentForm?.text || '';
export const getArticleDetailsCommentError = (state: StateSchema) =>
    state.articleDetailsCommentForm?.error;
