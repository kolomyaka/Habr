import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';


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


