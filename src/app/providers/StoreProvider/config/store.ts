import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';


import { scrollSaveReducer } from '@/features/ScrollSave';

import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';



import { createReducerManager } from './reducerManager';
import type { StateSchema } from './StateSchema';



// Делаем initialState, чтобы в дальнейшем для SB или тестов могли подготовить какие-то данные
export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {

    // Создаем root редюсер нашего приложения
    const rootReducer: ReducersMapObject<StateSchema> = {
        // Асинхронные редюсеры, которые будем добавлять напрмер в СБ добавляем в наш рут редюсер
        ...asyncReducers,
        [rtkApi.reducerPath]: rtkApi.reducer,
        user: userReducer,
        scrollSave: scrollSaveReducer
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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
        }).concat(rtkApi.middleware)
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
