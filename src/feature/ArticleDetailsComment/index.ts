export type {
    ArticleDetailsCommentFormSchema
} from './model/types/ArticleDetailsCommentFormSchema';

export type {
    ArticleDetailsCommentsSchema
} from './model/types/ArticleDetailsCommentsSchema';

export {
    articleDetailsCommentFormReducer
} from './model/slice/articleDetailsCommentFormSlice';

export {
    articleDetailsCommentsReducer
} from './model/slice/articleDetailsCommentsSlice';

export {
    ArticleDetailsCommentAsync as ArticleDetailsComment
} from './ui/ArticleDetailsComment/ArticleDetailsComment.async';