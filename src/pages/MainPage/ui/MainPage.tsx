import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная')}
            <RatingCard
                feedbackTitle={t('Оставьте отзыв о статье')}
                title={t('Как вам статья?')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
