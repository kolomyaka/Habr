import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList articles={[]} />
        </div>
    );
};

export default memo(ArticlesPage);

