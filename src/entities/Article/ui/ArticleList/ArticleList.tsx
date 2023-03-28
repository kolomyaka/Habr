import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { memo, useCallback } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean,
}

const renderArticlesSkeleton = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading
    } = props;
    const { t } = useTranslation('articles');
    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} view={view} />
        );
    }, [view]);

    if (!isLoading && !articles.length) {
        return (
            <Text title={t('Статей не найдено')} />
        );
    }


    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && renderArticlesSkeleton(view)}
        </div>
    );
});


