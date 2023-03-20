import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'feature/EditableProfileCard';
import { articleDetailsCommentFormReducer, articleDetailsCommentsReducer } from 'feature/ArticleDetailsComment';
import { articleDetailsReducer } from 'entities/Article';
import { loginReducer } from 'feature/AuthByUsername';


const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsCommentForm: articleDetailsCommentFormReducer
};

export const StoreDecorator = (
    store: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={store} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};