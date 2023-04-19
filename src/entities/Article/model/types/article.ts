// Интерфес статьи
import type { User } from 'entities/User';

import { ArticleBlockType } from '../consts/articleConsts';

export type ArticleView = 'big' | 'small';

export type ArticleSortField = 'views' | 'createdAt' | 'title';

// Енам для типов статьи
export type ArticleType = 'ALL' | 'IT' | 'SCIENCE' | 'ECONOMIC'

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    user: User;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[]
}

// Типы, которые может принимать блок в статье
export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

// Типизация отдельного блока в статье
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType
}

