import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/StoreProvider';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        console.log(userId);
        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return response;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
