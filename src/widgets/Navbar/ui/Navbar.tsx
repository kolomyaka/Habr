import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'feature/AuthByUsername';
import { LangSwitcher } from 'feature/LangSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogoutHandler = useCallback(() => {
        setIsAuthModal(false);
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.navbarControls}>
                <LangSwitcher />
                {
                    userAuthData
                        ? <Button
                            onClick={onLogoutHandler}
                            theme={ButtonTheme.OUTLINE}
                            className={cls.links}
                        >
                            {t('Выйти')}
                        </Button>
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


