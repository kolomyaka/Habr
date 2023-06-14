import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile } from '@/entities/Profile';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
    ProfileSchema,
    ValidateProfileError,
} from '../types/EditableProfileCard';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.readonly = true;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // FetchProfile data
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.data = action.payload;
                    state.form = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(
                fetchProfileData.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                },
            )
            // UpdateProfile Data
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.data = action.payload;
                    state.form = action.payload;
                    state.isLoading = false;
                    state.readonly = true;
                    state.validateError = undefined;
                },
            )
            .addCase(
                updateProfileData.rejected,
                (
                    state,
                    action: PayloadAction<ValidateProfileError[] | undefined>,
                ) => {
                    state.validateError = action.payload;
                    state.isLoading = false;
                },
            );
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
