import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';


import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article';
import { articlesPageReducer } from '@/pages/ArticlesPage';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { articleDetailsCommentFormReducer, articleDetailsCommentsReducer } from '@/feature/ArticleDetailsComment';
import { loginReducer } from '@/feature/AuthByUsername';
import { profileReducer } from '@/feature/EditableProfileCard';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsCommentForm: articleDetailsCommentFormReducer,
    articlesPage: articlesPageReducer
};

export const StoreDecorator = (
    store: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={store} asyncReducers={{ ...defaultAsyncReducers,...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};