import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';


// Делаем initialState, чтобы в дальнейшем для SB или тестов могли подготовить какие-то данные
export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {

    // Создаем root редюсер нашего приложения
    const rootReducer: ReducersMapObject<StateSchema> = {
        // Асинхронные редюсеры, которые будем добавлять напрмер в СБ добавляем в наш рут редюсер
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
