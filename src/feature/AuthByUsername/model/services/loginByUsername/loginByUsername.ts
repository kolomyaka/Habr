import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User/model/types/user';
import { userActions } from 'entities/User';
import { USER_LOCALSTORATE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error('error');
            }

            localStorage.setItem(USER_LOCALSTORATE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('Invalid username or password');
        }
    }
);