import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { Notification } from '../../model/notification';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    notification: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className,
        notification
    } = props;

    const content = (
        <Card className={classNames(cls.notificationItem, {}, [className])}>
            <Text
                title={notification.title}
                description={notification.description}
            />
        </Card>
    );

    if (notification.href) {
        return (
            <AppLink to={notification.href} className={cls.notificationLink}>
                {content}
            </AppLink>
        );
    }

    return (
        <>
            {content}
        </>
    );
});


