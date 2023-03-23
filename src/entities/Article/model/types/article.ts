// Интерфес статьи
import { User } from 'entities/User';

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

export enum View {
    BIG = 'big',
    SMALL = 'small'
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
// Енам для типа блоков
export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}
// Енам для типов статьи
export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC'
}

