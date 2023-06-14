import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sendComment } from '../services/sendComment';
import { ArticleDetailsCommentFormSchema } from '../types/ArticleDetailsCommentFormSchema';

const initialState: ArticleDetailsCommentFormSchema = {
    isLoading: false,
    error: undefined,
    text: '',
};

export const articleDetailsCommentFormSlice = createSlice({
    name: 'articleDetailsCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendComment.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(sendComment.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(
                sendComment.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { actions: articleDetailsCommentFormActions } =
    articleDetailsCommentFormSlice;
export const { reducer: articleDetailsCommentFormReducer } =
    articleDetailsCommentFormSlice;
