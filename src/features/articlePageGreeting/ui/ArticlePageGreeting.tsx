import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';

import { useAppDispatch, useDevice } from '@/shared/lib/hooks';
import { Drawer, Modal, Typography, VStack } from '@/shared/ui';

export const ArticlePageGreeting = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();
    const isMobile = useDevice();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const onClose = () => setIsOpen(false);

    const text = (
        <>
            <Typography size={'l'}>
                {t('Добро пожаловать на страницу статей')}
            </Typography>
            <Typography>
                {t(
                    'Здесь вы можете искать и просматривать статьи на различные темы',
                )}
            </Typography>
        </>
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose}>
                <VStack gap={16}>{text}</VStack>
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <VStack align={'center'}>{text}</VStack>
        </Modal>
    );
};
