import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'feature/AuthByUsername';


// Делаем initialState, чтобы в дальнейшем для SB или тестов могли подготовить какие-то данные
export const createReduxStore = (initialState?: StateSchema) => {

    // Создаем root редюсер нашего приложения
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
};
