import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from 'entities/Article';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemProps) => {
    const {
        className,
        view,
    } = props;

    const types = <Skeleton className={cls.articleTags} width={130} height={24} />;
    const views = (
        <div className={cls.articleViewInfo}>
            <Skeleton className={cls.icon} border={'50%'} width={30} height={30} />
            <Skeleton width={60} height={24} />
        </div>
    );


    if (view === 'small') {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls['small']])}>
                <Card className={cls.articleCard}>
                    <div className={cls.articleHeader}>
                        <Skeleton className={cls.articleImage} width={'100%'} height={250} />
                    </div>
                    <div className={cls.articleFooter}>
                        <div className={cls.articleInfo}>
                            {types}
                            {views}
                        </div>
                        <Skeleton width={'100%'} height={24} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls['big']])}>
            <Card className={cls.articleCard}>
                <div className={cls.articleHeader}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton width={120} height={24} className={cls.articleUser}  />
                    <Skeleton width={90} height={24} className={cls.articleCreated} />
                </div>
                <Skeleton width={200} height={24} className={cls.articleTitle}  />
                {types}
                <Skeleton width={'100%'} height={250} className={cls.articleImage} />
                <Skeleton width={'100%'} height={100} className={cls.articleText} />
                <div className={cls.articleFooter}>
                    <Skeleton width={180} height={36} />
                    {views}
                </div>
            </Card>
        </div>
    );
});
