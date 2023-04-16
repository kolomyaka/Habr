import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';
import { getArticlesPageType } from 'pages/ArticlesPage';

interface ArticleTypeTabsProps {
    className?: string;
    onChangeTab: (tab: TabItem<ArticleType>) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const {
        className,
        onChangeTab
    } = props;
    const { t } = useTranslation('articles');
    const type = useSelector(getArticlesPageType);

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('IT')
        },
        {
            value: ArticleType.ECONOMIC,
            content: t('Экономика')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t]);

    const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
        onChangeTab(tab);
    }, [onChangeTab]);

    return (
        <div className={classNames('', {}, [className])}>
            <Tabs
                tabs={typeTabs}
                value={type}
                onTabClick={onChangeType}
            />
        </div>
    );
};


