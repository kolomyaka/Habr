import { ArticleDetailsComment } from 'feature/ArticleDetailsComment';
import { ArticleDetailsRecommendations } from 'feature/ArticleDetailsRecommendations';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails, ArticleDetailsPageHeader } from 'entities/Article';
import { Page } from 'widgets/Page';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <Page>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <ArticleDetailsRecommendations />
            <ArticleDetailsComment id={id} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);


