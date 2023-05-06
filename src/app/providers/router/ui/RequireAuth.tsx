import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUserAuthData, getUserRoles, UserRoles } from '@/entities/User';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRoles[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(role => (
            userRoles?.includes(role)
        ));
    }, [roles, userRoles]);

    // В случае если пользователь на авторизован, то перекидываем его на главную страницу
    if (!auth) {
        return <Navigate to={RoutePath.main} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden_page} replace />;
    }

    return children;
};