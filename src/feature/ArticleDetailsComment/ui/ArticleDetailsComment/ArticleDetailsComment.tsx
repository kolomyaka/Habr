import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsComment.module.scss';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../../model/slice/articleDetailsCommentsSlice';
import { AddNewComment } from 'entities/Comment/ui/AddNewComment/AddNewComment';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentText } from '../../model/selectors/comments';
import {
    articleDetailsCommentFormActions,
    articleDetailsCommentFormReducer
} from '../../model/slice/articleDetailsCommentFormSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { sendComment } from '../../model/services/sendComment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'feature/ArticleDetailsComment/model/services/fetchCommentsByArticleId';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

export interface ArticleDetailsCommentProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsCommentForm: articleDetailsCommentFormReducer
};

const ArticleDetailsComment = memo(({ className }: ArticleDetailsCommentProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentText = useSelector(getArticleDetailsCommentText);
    const { id } = useParams<{id: string}>();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendCommentHandler = useCallback((text: string) => {
        dispatch(sendComment(text));
        dispatch(articleDetailsCommentFormActions.setText(''));
    }, [dispatch]);

    const onChangeCommentHandler = useCallback((text: string) => {
        dispatch(articleDetailsCommentFormActions.setText(text));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailsComment, {}, [className])}>
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddNewComment
                    onChangeCommentHandler={onChangeCommentHandler}
                    sendCommentHandler={onSendCommentHandler}
                    text={commentText}
                />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsComment;


