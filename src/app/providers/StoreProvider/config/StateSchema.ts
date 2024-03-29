import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticlesPageSchema } from '@/pages/ArticlesPage';

import {
    ArticleDetailsCommentFormSchema,
    ArticleDetailsCommentsSchema,
} from '@/features/ArticleDetailsComment';
import { ArticleDetailsRecommendationsSchema } from '@/features/ArticleDetailsRecommendations';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ScrollSaveSchema } from '@/features/ScrollSave';

import { ArticleDetailsSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';

import { rtkApi } from '@/shared/api/rtkApi';

// Типизируем наше хранилище редюсеров
export interface StateSchema {
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // Асинхронные редюсеры
    profile?: ProfileSchema;
    loginForm?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    articleDetailsCommentForm?: ArticleDetailsCommentFormSchema;
    articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

// Типизируем наше хранилище
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

// Типизируем поле extra у ThunkAPI
export interface ThunkExtraArg {
    api: AxiosInstance;
}

// Типизируем саму AsyncThunk
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
