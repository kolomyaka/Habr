import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import {
    type ReduxStoreWithManager,
    type StateSchema,
    type StateSchemaKey
} from '@/app/providers/StoreProvider';

export type ReducersList = {
    // Делаем более строгую типизацию для reducersList, чтобы не могли добавить ошибочный редюсер
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
    children: ReactNode;
    removeAfterUnmount?: boolean;
    reducers: ReducersList
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

    const {
        children,
        removeAfterUnmount = true,
        reducers
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);


    return (
        <>
            { children }
        </>
    );
};


