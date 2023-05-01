import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { ArticleDetailsComment } from '@/features/ArticleDetailsComment';
import { ArticleDetailsRecommendations } from '@/features/ArticleDetailsRecommendations';
import { ArticleRating } from '@/features/Rating/ArticleRating';

import { ArticleDetails, ArticleDetailsPageHeader } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';







const ArticleDetailsPage = () => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <Page>
            <VStack max gap={16}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleDetailsRecommendations />
                <ArticleDetailsComment id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);


