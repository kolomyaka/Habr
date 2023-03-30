import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsRecommendations.module.scss';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsRecommendationsIsLoading
} from 'feature/ArticleDetailsRecommendations/model/selectors/articleDetailsRecommendationsSelectors';
import {
    articleDetailsRecommendationsReducer,
    getArticleRecommendations
} from 'feature/ArticleDetailsRecommendations/model/slices/articleDetailsRecommendationsSlice';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchArticleRecommendations
} from 'feature/ArticleDetailsRecommendations/model/services/fetchArticleRecommendations';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

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


