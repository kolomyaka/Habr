import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticlesPageType } from '@/pages/ArticlesPage';

import type { ArticleType } from '@/entities/Article';

import { classNames } from '@/shared/lib';
import { TabItem, Tabs } from '@/shared/ui';


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
            value: 'ALL',
            content: t('Все статьи')
        },
        {
            value: 'IT',
            content: t('IT')
        },
        {
            value: 'ECONOMIC',
            content: t('Экономика')
        },
        {
            value: 'SCIENCE',
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


