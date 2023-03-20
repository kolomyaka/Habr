import { Comment } from 'entities/Comment/model/types/comment';
import { EntityState } from '@reduxjs/toolkit';

// Наследуемся от интерфейса нормализованных данных и в качестве дженерика (Нормализованной сущности)
// Передаем как раз сущность, данные которой нормализуем
export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}