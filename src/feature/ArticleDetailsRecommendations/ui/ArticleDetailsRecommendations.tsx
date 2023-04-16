import {
    getArticleDetailsRecommendationsIsLoading
} from 'feature/ArticleDetailsRecommendations/model/selectors/articleDetailsRecommendationsSelectors';
import {
    fetchArticleRecommendations
} from 'feature/ArticleDetailsRecommendations/model/services/fetchArticleRecommendations';
import {
    articleDetailsRecommendationsReducer,
    getArticleRecommendations
} from 'feature/ArticleDetailsRecommendations/model/slices/articleDetailsRecommendationsSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';

import cls from './ArticleDetailsRecommendations.module.scss';

interface ArticleDetailsRecommendationsListProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsRecommendations: articleDetailsRecommendationsReducer
};

export const ArticleDetailsRecommendations = memo(({ className }: ArticleDetailsRecommendationsListProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsRecommendationsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.articleDetailsRecommendationsList, {}, [className])}>
                <Text className={cls.recommendationsTitle} title={t('Рекомендации')} />
                <ArticleList
                    target={'_blank'}
                    articles={recommendations}
                    isLoading={isLoading}
                    className={cls.recommendationsList}
                />
            </div>
        </DynamicModuleLoader>
    );
});


