import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { AppRoutesProps, routeConfig } from '@/shared/config';

import { RequireAuth } from './RequireAuth';

const AppRouter = () => {

    // Функция, которая будет вызываться для каждого роута в нашем приложении
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        // Элемент оборачиваем в suspense
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        // Если роут является приватным, то оборачиваем его в компонент с логикой редиректа на главную страницу
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
