import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { type StateSchema } from '@/app/providers/StoreProvider';

import i18nForTest from '../../../config/i18n/i18nForTest';


export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {

    const {
        route = '/',
        initialState,
        asyncReducers
    } = options;

    return render(
        <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}