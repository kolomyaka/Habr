import { createSelector } from '@reduxjs/toolkit';

import type { StateSchema } from 'app/providers/StoreProvider';

import { UserRoles } from '../../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getIsAdmin = createSelector(getUserRoles, (roles) => (
    roles?.includes(UserRoles.ADMIN)
));

export const getIsUser = createSelector(getUserRoles, (roles) => (
    roles?.includes(UserRoles.USER)
));