import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import cls from './CommentList.module.scss';

interface CommentListProps {
    comments: Comment[];
    className?: string;
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {

    const { t } = useTranslation('articles');
    const {
        className,
        comments,
        isLoading
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments.length
                ? comments.map((comment)=> (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
                : <Text title={t('Комментарии отсутсвуют')} />
            }
        </div>
    );
});


