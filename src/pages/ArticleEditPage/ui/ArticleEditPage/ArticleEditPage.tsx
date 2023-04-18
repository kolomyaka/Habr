import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page';

const ArticleEditPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const canEdit = Boolean(id);

    return (
        <Page>
            {canEdit
                ? t('Edit article')
                : t('Create article')
            }
        </Page>
    );
};

export default ArticleEditPage;


