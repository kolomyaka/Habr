import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { getUserAuthData } from '@/entities/User';

import cls from './Navbar.module.scss';

import { LoginModal } from '@/feature/AuthByUsername';
import { AvatarDropdown } from '@/feature/AvatarDropdown';
import { LangSwitcher } from '@/feature/LangSwitcher';
import { NotificationButton } from '@/feature/NotificationButton';

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


