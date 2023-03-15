import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'feature/EditableProfileCard';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
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