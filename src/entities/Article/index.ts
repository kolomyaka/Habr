export {
    ArticleDetails
} from './ui/ArticleDetails/ArticleDetails';

export {
    ArticleDetailsPageHeader
} from './ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';

export type {
    Article,
    ArticleView,
    ArticleType,
    ArticleSortField
} from './model/types/article';

export {
    articleDetailsReducer
} from './model/slice/articleDetailsSlice';

export type {
    ArticleDetailsSchema
} from './model/types/ArticleDetailsSchema';

export {
    ArticleList
} from './ui/ArticleList/ArticleList';

export {
    ArticleBlockType
} from './model/consts/articleConsts';

export {
    getArticleDetailsData
} from './model/selectors/articleDetails';