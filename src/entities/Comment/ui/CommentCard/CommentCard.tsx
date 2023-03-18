import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <Skeleton
                    border={'50%'}
                    width={45}
                    height={45}
                />
                <div className={cls.content}>
                    <Skeleton width={150} height={20} />
                    <Skeleton width={'100%'} height={40} />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            {comment.user.avatar
                ? <Avatar size={45} src={comment.user.avatar} />
                : null
            }
            <div className={cls.content}>
                <Text description={comment.user.username} />
                <Text description={comment.text} />
            </div>
        </div>
    );
});


