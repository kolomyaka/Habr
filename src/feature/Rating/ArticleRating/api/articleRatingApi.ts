import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface getArticleRatingInterface {
    articleId: string;
    userId: string;
}

interface rateArticleInterface {
    articleId: string;
    userId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], getArticleRatingInterface>({
            query: ({ userId, articleId }) => ({
                url: '/article-rating',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        rateArticle: build.mutation<null, rateArticleInterface>({
            query: (arg) => ({
                url: '/article-rating',
                method: 'POST',
                body: arg
            })
        })
    })
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;