import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import { ArticleList } from 'entities/Article';
import { Page } from 'widgets/Page/ui/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className
    } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    // TODO: Добавить возможный вывод ошибки

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

