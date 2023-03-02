import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, [setIsAuthModal]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={() => setIsAuthModal(true)}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Random text Random text Random text Random text Random text')}
            </Modal>
        </div>
    );
};


