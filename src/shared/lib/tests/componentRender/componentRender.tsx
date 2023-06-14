import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import '@/app/styles/index.scss';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { Theme } from '@/shared/const/theme';

import i18nForTest from '../../../config/i18n/i18nForTest';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions
}

export const TestProvider = (props: TestProviderProps) => {
    const {
        children,
        options = {},
    } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT
    } = options;

    return (
        <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={'app'}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};

export function componentRender(component: ReactNode, options?: componentRenderOptions) {

    return render(
        <TestProvider options={options}>{component}</TestProvider>
    );
}