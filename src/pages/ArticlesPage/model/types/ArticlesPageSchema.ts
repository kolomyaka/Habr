import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField } from 'entities/Article';
import { ArticleType, ArticleView } from 'entities/Article/model/types/article';
import { OrderType } from 'shared/types/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    error?: string;
    isLoading: boolean;
    view: ArticleView;
    type: ArticleType;

    // Pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // Filters
    order: OrderType;
    sort: ArticleSortField;
    search: string;

    _inited: boolean;
}