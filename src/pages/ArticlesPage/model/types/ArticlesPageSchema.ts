import { EntityState } from '@reduxjs/toolkit';

import { OrderType } from 'shared/types/types';
import { Article, ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    error?: string;
    isLoading: boolean;
    view?: ArticleView;
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