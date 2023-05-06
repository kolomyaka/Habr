import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { LangSwitcher } from '@/features/LangSwitcher';
import { NotificationButton } from '@/features/NotificationButton';

import { getUserAuthData } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack , Button, ButtonTheme } from '@/shared/ui';

import cls from './Navbar.module.scss';


interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const userAuthData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);
    
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);
    
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.navbarControls}>
                <LangSwitcher />
                {
                    userAuthData
                        ? <HStack max align={'center'} gap={24}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                        : <Button
                            onClick={onShowModal}
                            theme={ButtonTheme.OUTLINE}
                            className={cls.links}
                        >
                            {t('Войти')}
                        </Button>
                }
            </div>
            {
                !userAuthData && isAuthModal && <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            }
        </div>
    );
});


