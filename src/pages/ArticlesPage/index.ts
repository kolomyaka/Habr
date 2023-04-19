export { ArticlesPageAsync as ArticlesPage } from './ui/ArticlesPage/ArticlesPage.async';

export type {
    ArticlesPageSchema
} from './model/types/ArticlesPageSchema';

export {
    articlesPageReducer
} from './model/slices/articlesPageSlice';

export {
    getArticlesPageType
} from './model/selectors/articlesPage';