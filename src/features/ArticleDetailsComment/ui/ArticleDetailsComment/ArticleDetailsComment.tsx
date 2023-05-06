import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


import { CommentList, AddNewComment } from '@/entities/Comment';

import { classNames   } from '@/shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';
import { useAppDispatch , useInitialEffect } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text/Text';

import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentText } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { sendComment } from '../../model/services/sendComment';
import {
    articleDetailsCommentFormActions,
    articleDetailsCommentFormReducer
} from '../../model/slice/articleDetailsCommentFormSlice';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

import cls from './ArticleDetailsComment.module.scss';


export interface ArticleDetailsCommentProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsCommentForm: articleDetailsCommentFormReducer
};

const ArticleDetailsComment = memo(({ className, id }: ArticleDetailsCommentProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentText = useSelector(getArticleDetailsCommentText);

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


