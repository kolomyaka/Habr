import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getUserAuthData } from 'entities/User';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useSelector(getUserAuthData);

    // В случае если пользователь на авторизован, то перекидываем его на главную страницу
    if (!auth) {
        return <Navigate to={RoutePath.main} replace />;
    }

    return children;
};