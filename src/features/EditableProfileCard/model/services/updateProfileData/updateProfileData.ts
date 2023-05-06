import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile } from '@/entities/Profile';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../../types/EditableProfileCard';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());
        // Смотрим есть ли ошибки при редактировании формы
        const errors = validateProfileData(formData);
        // Если есть ошибка, то возращаем reject у запроса
        if (errors.length) {
            return rejectWithValue(errors);
        }

        if (!formData) {
            return rejectWithValue([ValidateProfileError.NO_DATA]);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);