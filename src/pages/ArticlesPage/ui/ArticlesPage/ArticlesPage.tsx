import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { View } from 'entities/Article/model/types/article';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList isLoading={false} articles={[]} view={View.BIG} />
        </div>
    );
};

export default memo(ArticlesPage);

