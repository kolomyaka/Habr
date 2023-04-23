import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная')}
            <RatingCard feedbackTitle={t('Оставьте отзыв о статье')} title={t('Оставьте отзыв о статье')} />
        </Page>
    );
};

export default MainPage;
