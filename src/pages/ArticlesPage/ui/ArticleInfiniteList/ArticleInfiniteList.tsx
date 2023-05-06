import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entities/Article';

import { Text } from '@/shared/ui/Text/Text';

import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice';

export const ArticleInfiniteList = () => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text title={t('При загрузке данных произошла ошибка')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
        />
    );
};


