import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo, useCallback } from 'react';
import { Article } from '../../model/types/article';
import { ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        view,
        article
    } = props;
    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const types = <Text description={article.type.join(',')} className={cls.articleTags} />;
    const views = (
        <div className={cls.articleViewInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text description={String(article.views)} />
        </div>
    );

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article.id}`);
    }, [article.id, navigate]);

    if (view === ArticleView.SMALL) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[ArticleView.SMALL]])}>
                <Card onClick={onOpenArticle} className={cls.articleCard}>
                    <div className={cls.articleHeader}>
                        <img alt={article.title} src={article.img} className={cls.articleImage} />
                        <Text description={article.createdAt} className={cls.articleCreated} />
                    </div>
                    <div className={cls.articleFooter}>
                        <div className={cls.articleInfo}>
                            {types}
                            {views}
                        </div>
                        <Text className={cls.articleTitle} description={article.title} />
                    </div>
                </Card>
            </div>
        );
    }

    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[ArticleView.BIG]])}>
            <Card className={cls.articleCard}>
                <div className={cls.articleHeader}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text description={article.user.username} className={cls.articleUser} />
                    <Text description={article.createdAt} className={cls.articleCreated} />
                </div>
                <Text title={article.title} className={cls.articleTitle} />
                {types}
                <img src={article.img} className={cls.articleImage} alt={article.title} />
                {textBlock && (
                    <ArticleTextBlockComponent className={cls.articleText} block={textBlock} />
                )}
                <div className={cls.articleFooter}>
                    <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Читать далее...')}
                    </Button>
                    {views}
                </div>
            </Card>
        </div>
    );
});
