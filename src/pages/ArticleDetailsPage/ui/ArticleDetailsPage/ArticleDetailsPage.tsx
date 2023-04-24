import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails, ArticleDetailsPageHeader } from '@/entities/Article';
import { Page } from '@/widgets/Page';

import { ArticleDetailsComment } from '@/feature/ArticleDetailsComment';
import { ArticleDetailsRecommendations } from '@/feature/ArticleDetailsRecommendations';
import { ArticleRating } from '@/feature/ArticleRating';

const ArticleDetailsPage = () => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <Page>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <ArticleRating articleId={id} />
            <ArticleDetailsRecommendations />
            <ArticleDetailsComment id={id} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);


