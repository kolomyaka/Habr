import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { memo, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { ArticleViewSelector } from 'feature/ArticleViewSelector';
import { ArticleSortField, ArticleSortSelector, ArticleType, ArticleView } from 'entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageView
} from '../../model/selectors/articlesPage';
import { OrderType } from 'shared/types/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleTypeTabs } from 'feature/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: OrderType) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSortField = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
        dispatch(articlesPageActions.setType(tab.value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
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
                    label={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs onChangeTab={onChangeType} />
        </div>
    );
});


