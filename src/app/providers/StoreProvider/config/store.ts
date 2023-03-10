import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';


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

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            // Настраиваем middleware для санки
            thunk: {
                // Настраиваем extra-аргументы санки
                extraArgument: {
                    // Делаем поле api и передаем как раз наш конфиг axios
                    api: $api
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
