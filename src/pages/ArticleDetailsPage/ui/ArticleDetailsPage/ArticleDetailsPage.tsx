import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails, ArticleDetailsPageHeader } from '@/entities/Article';
import { Page } from '@/widgets/Page';

import { ArticleDetailsComment } from '@/feature/ArticleDetailsComment';
import { ArticleDetailsRecommendations } from '@/feature/ArticleDetailsRecommendations';

const ArticleDetailsPage = () => {
    const { id } = useParams<{id: string}>();

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


