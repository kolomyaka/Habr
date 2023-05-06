import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Skeleton , VStack } from '@/shared/ui';

import { useGetNotifications } from '../../api/NotificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import cls from './NotificationsList.module.scss';

interface NotificationsListProps {
    className?: string
}

export const NotificationsList = memo(({ className }: NotificationsListProps) => {
    const { data: notifications, isLoading } = useGetNotifications(null, {
        pollingInterval: 5000
    });

    if (isLoading) {
        return (
            <VStack
                gap={4}
                className={classNames('', {}, [className])}
            >
                <Skeleton border={8} className={cls.notificationLoader} height={86} />
                <Skeleton border={8} className={cls.notificationLoader} height={86} />
                <Skeleton border={8} className={cls.notificationLoader} height={86} />
            </VStack>
        );
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
        >
            {notifications?.map(notification => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </VStack>
    );
});


