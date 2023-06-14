import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';

import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApi';

export interface ProfileRatingProps {
    profileId: string;
}

const ProfileRating = memo(({ profileId }: ProfileRatingProps) => {
    const { t } = useTranslation('articles');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id || '',
    });
    const [rateProfile] = useRateProfile();

    const onRateProfileHandler = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfile({
                    profileId,
                    userId: userData?.id || '',
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [profileId, rateProfile, userData?.id],
    );

    const onAcceptHandler = useCallback(
        (starsCount: number, feedback: string) => {
            onRateProfileHandler(starsCount, feedback);
        },
        [onRateProfileHandler],
    );

    const onCancelHandler = useCallback(
        (starsCount: number) => {
            onRateProfileHandler(starsCount);
        },
        [onRateProfileHandler],
    );

    const rating = data?.[0];

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAcceptHandler}
            onCancel={onCancelHandler}
            rate={rating?.rate}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте отзыв о профиле')}
            hasFeedback
        />
    );
});

export default ProfileRating;
