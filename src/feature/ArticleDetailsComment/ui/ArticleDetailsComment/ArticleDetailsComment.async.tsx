import { FC, lazy } from 'react';

import { ArticleDetailsCommentProps } from './ArticleDetailsComment';

// Т.к компонент обернут в мемо, то у lazy как generic указываем пропсы нашего компонента
export const ArticleDetailsCommentAsync = lazy<FC<ArticleDetailsCommentProps>>(() => import('./ArticleDetailsComment'));