import { Rating } from '@/entities/Rating';

import { rtkApi } from '@/shared/api/rtkApi';

interface getProfileRatingInterface {
    profileId: string;
    userId: string;
}

interface rateProfileInterface {
    profileId: string;
    userId: string;
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], getProfileRatingInterface>({
            query: ({ userId, profileId }) => ({
                url: '/profile-rating',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateArticle: build.mutation<null, rateProfileInterface>({
            query: (arg) => ({
                url: '/profile-rating',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetArticleRatingQuery;
export const useRateProfile = profileRatingApi.useRateArticleMutation;
