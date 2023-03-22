import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { memo, useCallback } from 'react';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { View } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: View
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = View.SMALL
    } = props;
    const { t } = useTranslation();

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem article={article} view={view} />
        );
    }, [view]);

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : <Text title={t('Нет статей')} />
            }
        </div>
    );
});


