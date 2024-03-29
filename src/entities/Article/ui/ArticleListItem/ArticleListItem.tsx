import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui/Text/Text';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
    Article,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, view, article, target } = props;
    const { t } = useTranslation('articles');

    const types = (
        <Text
            data-testid={'ArticleListItemType'}
            description={article.type.join(',')}
            className={cls.articleTags}
        />
    );
    const views = (
        <div className={cls.articleViewInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text description={String(article.views)} />
        </div>
    );

    if (view === 'small') {
        return (
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <div
                    data-testid={'ArticleListItem'}
                    className={classNames(cls.articleListItem, {}, [
                        className,
                        cls['small'],
                    ])}
                >
                    <Card className={cls.articleCard}>
                        <div className={cls.articleHeader}>
                            <AppImage
                                alt={article.title}
                                src={article.img}
                                className={cls.articleImage}
                                fallback={
                                    <Skeleton width={'100%'} height={250} />
                                }
                            />
                            <Text
                                description={article.createdAt}
                                className={cls.articleCreated}
                            />
                        </div>
                        <div className={cls.articleFooter}>
                            <div className={cls.articleInfo}>
                                {types}
                                {views}
                            </div>
                            <Text
                                className={cls.articleTitle}
                                description={article.title}
                                data-testid={'ArticleListItem'}
                            />
                        </div>
                    </Card>
                </div>
            </AppLink>
        );
    }

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
        <div
            data-testid={'ArticleListItem'}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls['big'],
            ])}
        >
            <Card className={cls.articleCard}>
                <div className={cls.articleHeader}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text
                        description={article.user.username}
                        className={cls.articleUser}
                    />
                    <Text
                        description={article.createdAt}
                        className={cls.articleCreated}
                    />
                </div>
                <Text title={article.title} className={cls.articleTitle} />
                {types}
                <AppImage
                    fallback={<Skeleton width={'100%'} height={250} />}
                    src={article.img}
                    className={cls.articleImage}
                    alt={article.title}
                />
                {textBlock && (
                    <ArticleTextBlockComponent
                        className={cls.articleText}
                        block={textBlock}
                    />
                )}
                <div className={cls.articleFooter}>
                    <AppLink
                        target={target}
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        </div>
    );
});
