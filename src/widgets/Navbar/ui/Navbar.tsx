import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'feature/AuthByUsername';
import { LangSwitcher } from 'feature/LangSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    const { t } = useTranslation();

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
                <Button
                    onClick={onShowModal}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.links}
                >
                    {t('Войти')}
                </Button>
            </div>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};


