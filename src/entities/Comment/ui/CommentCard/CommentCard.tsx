import { memo } from 'react';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
import { Comment } from '@/entities/Comment/model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
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
            <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
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

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            {comment.user.avatar
                ? <>
                    <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
                        <Avatar size={45} src={comment.user.avatar} />
                    </AppLink>
                </>
                : null
            }
            <div className={cls.content}>
                <AppLink className={cls.commentUsername} to={`${RoutePath.profile}${comment.user.id}`}>
                    <Text description={comment.user.username} />
                </AppLink>
                <Text description={comment.text} />
            </div>
        </div>
    );
});


