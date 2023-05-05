import { useCallback, useState } from 'react';

import { NotificationsList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import { useDevice } from '@/shared/lib';
import { Button, ButtonTheme } from '@/shared/ui';
import { Drawer } from '@/shared/ui';
import { Icon } from '@/shared/ui';
import { Popover } from '@/shared/ui';

import cls from './NotificationButton.module.scss';

export const NotificationButton = () => {

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


