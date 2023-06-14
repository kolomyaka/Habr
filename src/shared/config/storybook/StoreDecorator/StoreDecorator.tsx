import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { articlesPageReducer } from '@/pages/ArticlesPage';

import {
    articleDetailsCommentFormReducer,
    articleDetailsCommentsReducer,
} from '@/features/ArticleDetailsComment';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/EditableProfileCard';

import { articleDetailsReducer } from '@/entities/Article';

import { ReducersList } from '@/shared/lib';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsCommentForm: articleDetailsCommentFormReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator =
    (
        store: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
    (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={store}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
