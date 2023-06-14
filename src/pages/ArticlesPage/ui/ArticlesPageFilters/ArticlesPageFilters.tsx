import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article';

import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { OrderType } from '@/shared/types/types';
import { Card, Input, TabItem } from '@/shared/ui';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageView,
} from '../../model/selectors/articlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation('articles');
        const dispatch = useAppDispatch();
        const view = useSelector(getArticlesPageView);
        const order = useSelector(getArticlesPageOrder);
        const sortField = useSelector(getArticlesPageSortField);
        const search = useSelector(getArticlesPageSearch);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);
        const debouncedFetchData = useDebounce(fetchData, 400);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeOrder = useCallback(
            (newOrder: OrderType) => {
                dispatch(articlesPageActions.setOrder(newOrder));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSortField = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(newSort));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );

        const onChangeType = useCallback(
            (tab: TabItem<ArticleType>) => {
                dispatch(articlesPageActions.setType(tab.value));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        return (
            <div
                className={classNames(cls.articlesPageFilters, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        order={order}
                        sortField={sortField}
                        onChangeOrder={onChangeOrder}
                        onChangeSortField={onChangeSortField}
                    />
                    <ArticleViewSelector
                        onChangeView={onChangeView}
                        view={view}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        data-testid={'ArticlesPageFilters.Search'}
                        label={t('Поиск')}
                        value={search}
                        onChange={onChangeSearch}
                    />
                </Card>
                <ArticleTypeTabs onChangeTab={onChangeType} />
            </div>
        );
    },
);
