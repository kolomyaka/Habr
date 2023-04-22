import { useCallback, useState } from 'react';

import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popover/Popover';
import { NotificationsList } from '@/entities/Notification';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} />
        </Button>
    );
    
    return (
        <>
            {isMobile
                ? (
                    <>
                        {trigger}
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationsList />
                        </Drawer>
                    </>
                )
                : (
                    <Popover
                        trigger={trigger}>
                        <NotificationsList className={cls.notificationList} />
                    </Popover>
                )
            }
        </>
    );
};


