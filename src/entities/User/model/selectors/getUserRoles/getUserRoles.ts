import { createSelector } from '@reduxjs/toolkit';

import { UserRoles } from 'entities/User/model/consts/userConsts';

import type { StateSchema } from 'app/providers/StoreProvider';


export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getIsAdmin = createSelector(getUserRoles, (roles) => (
    roles?.includes(UserRoles.ADMIN)
));

export const getIsUser = createSelector(getUserRoles, (roles) => (
    roles?.includes(UserRoles.USER)
));