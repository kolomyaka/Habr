import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
};

export const StoreDecorator = (
    store: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={store} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};