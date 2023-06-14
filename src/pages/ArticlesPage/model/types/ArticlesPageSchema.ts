import { EntityState } from '@reduxjs/toolkit';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import type { Article, ArticleView } from '@/entities/Article';

import type { OrderType } from '@/shared/types/types';

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
