import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            {t('ARTICLE DETAILS PAGE')}
        </div>
    );
};

export default memo(ArticleDetailsPage);


