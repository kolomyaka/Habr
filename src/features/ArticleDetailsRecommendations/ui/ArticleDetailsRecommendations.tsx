import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';

import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';
import { Text } from '@/shared/ui';

import { useGetArticleRecommendations } from '../api/articleRecommendationsApi';
import { articleDetailsRecommendationsReducer } from '../model/slices/articleDetailsRecommendationsSlice';

import cls from './ArticleDetailsRecommendations.module.scss';

interface ArticleDetailsRecommendationsListProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};

export const ArticleDetailsRecommendations = memo(
    ({ className }: ArticleDetailsRecommendationsListProps) => {
        const { t } = useTranslation('articles');
        const { isLoading, data: recommendations } =
            useGetArticleRecommendations(4);

        if (isLoading || !recommendations) {
            return null;
        }

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div
                    className={classNames(
                        cls.articleDetailsRecommendationsList,
                        {},
                        [className],
                    )}
                    data-testid={'ArticleDetailsRecommendations'}
                >
                    <Text
                        className={cls.recommendationsTitle}
                        title={t('Рекомендации')}
                    />
                    <ArticleList
                        target={'_blank'}
                        articles={recommendations}
                        isLoading={isLoading}
                        className={cls.recommendationsList}
                    />
                </div>
            </DynamicModuleLoader>
        );
    },
);
