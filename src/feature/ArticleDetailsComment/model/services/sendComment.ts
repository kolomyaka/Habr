import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from 'feature/ArticleDetailsComment/model/services/fetchCommentsByArticleId';

export const sendComment = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
        'articleDetailsComment/sendComment',
        async (commentText, thunkAPI) => {
            const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
            const article = getArticleDetailsData(getState());
            const user = getUserAuthData(getState());

            if (!article || !user || !commentText) {
                return rejectWithValue('error');
            }

            try {
                const response = await extra.api.post<Comment>('/comments/', {
                    text: commentText,
                    articleId: article.id,
                    userId: user.id
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        }
    );