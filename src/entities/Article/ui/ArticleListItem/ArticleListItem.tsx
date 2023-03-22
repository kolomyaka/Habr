import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import { Article } from 'entities/Article';
import { View } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view?: View
}


export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        view,
        article
    } = props;

    if (view === View.SMALL) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[View.SMALL]])}>
                <Text title={article?.title} />
            </div>
        );
    }


    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[View.BIG]])}>

        </div>
    );
});


