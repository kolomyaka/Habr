import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';



import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    articleId: string;
}

const ArticleRating = memo(({ articleId }: ArticleRatingProps) => {
    const { t } = useTranslation('articles');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id || ''
    });
    const [rateArticle] = useRateArticle();

    const onRateArticleHandler = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticle({
                articleId,
                userId: userData?.id || '',
                rate: starsCount,
                feedback
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticle, userData?.id]);

    const onAcceptHandler = useCallback((starsCount: number, feedback: string) => {
        onRateArticleHandler(starsCount, feedback);
    }, [onRateArticleHandler]);

    const onCancelHandler = useCallback((starsCount: number) => {
        onRateArticleHandler(starsCount);
    }, [onRateArticleHandler]);

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAcceptHandler}
            onCancel={onCancelHandler}
            rate={rating?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв о статье')}
            hasFeedback
        />
    );
});

export default ArticleRating;
