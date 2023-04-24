import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { ArticleView } from '../../model/types/article';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean,
    target?: HTMLAttributeAnchorTarget;
}

const renderArticlesSkeleton = (view: ArticleView) => {
    return new Array(view === 'big' ? 9 : 4)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'small',
        isLoading,
        target = '_self'
    } = props;
    const { t } = useTranslation('articles');

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem target={target} key={article.id} article={article} view={view} />
        );
    }, [view, target]);

    if (!isLoading && !articles?.length) {
        return (
            <Text title={t('Статей не найдено')} />
        );
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles?.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && renderArticlesSkeleton(view)}
        </div>
    );
});


