import { useTranslation } from 'react-i18next';

interface FallbackProps {
    error: Error
    resetErrorBoundary: (...args: Array<unknown>) => void
}

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    const { t } = useTranslation();
    return (
        <div role="alert">
            <p>{t('Что-то пошло не так')}</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>{t('Обновить страницу')}</button>
        </div>
    );
};


