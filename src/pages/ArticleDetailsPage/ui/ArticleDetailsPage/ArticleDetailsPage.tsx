import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { ArticleDetailsComment } from '@/features/ArticleDetailsComment';
import { ArticleDetailsRecommendations } from '@/features/ArticleDetailsRecommendations';
import { ArticleRating } from '@/features/Rating';

import { ArticleDetails, ArticleDetailsPageHeader } from '@/entities/Article';

import { getFeatureFlag } from '@/shared/lib/features';
import { VStack } from '@/shared/ui';

const ArticleDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    if (!id) {
        return null;
    }

    return (
        <Page>
            <VStack max gap={16}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                <ArticleDetailsRecommendations />
                <ArticleDetailsComment id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
