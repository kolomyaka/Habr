import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popover/Popover';
import { NotificationsList } from 'entities/Notification';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    return (
        <Popover
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} />
                </Button>
            }>
            <NotificationsList className={cls.notificationList} />
        </Popover>
    );
};


