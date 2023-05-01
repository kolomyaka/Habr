import { EntityState } from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';

// Наследуемся от интерфейса нормализованных данных и в качестве дженерика (Нормализованной сущности)
// Передаем как раз сущность, данные которой нормализуем
export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}