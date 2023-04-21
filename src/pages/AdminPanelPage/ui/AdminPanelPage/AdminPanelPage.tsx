import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('АДМИН ПАНЕЛЬ')}
        </Page>
    );
});

export default AdminPanelPage;

