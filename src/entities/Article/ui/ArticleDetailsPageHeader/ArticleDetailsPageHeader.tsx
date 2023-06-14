import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import {
    getArticleDetailsData,
    getCanEditArticle,
} from '../../model/selectors/articleDetails';

import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation('articles');
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        return (
            <div
                className={classNames(cls.articleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <AppLink theme={AppLinkTheme.OUTLINE} to={'/articles'}>
                    {t('Назад к списку')}
                </AppLink>
                {canEdit && (
                    <AppLink
                        theme={AppLinkTheme.OUTLINE}
                        to={`/articles/${article?.id}/edit`}
                    >
                        {t('Редактировать')}
                    </AppLink>
                )}
            </div>
        );
    },
);
