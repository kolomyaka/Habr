import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ArticleDetailsComment } from 'feature/ArticleDetailsComment';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleDetailsRecommendations } from 'feature/ArticleDetailsRecommendations/ui/ArticleDetailsRecommendations';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';


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


