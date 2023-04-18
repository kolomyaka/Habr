import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const ArticleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export const useGetArticleRecommendations = ArticleRecommendationsApi.useGetArticleRecommendationsQuery;