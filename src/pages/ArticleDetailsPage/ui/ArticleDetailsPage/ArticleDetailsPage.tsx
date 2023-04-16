import { ArticleDetailsComment } from 'feature/ArticleDetailsComment';
import { ArticleDetailsRecommendations } from 'feature/ArticleDetailsRecommendations';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleDetailsPageHeader } from 'entities/Article';
import { Page } from 'widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls .articleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <ArticleDetailsRecommendations />
            <ArticleDetailsComment />
        </Page>
    );
};

export default memo(ArticleDetailsPage);


