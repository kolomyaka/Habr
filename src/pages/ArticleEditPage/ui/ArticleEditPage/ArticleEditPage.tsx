import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

import cls from './ArticleEditPage.module.scss';



interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const canEdit = Boolean(id);

    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            {canEdit
                ? t('Edit article')
                : t('Create article')
            }
        </Page>
    );
};

export default ArticleEditPage;


