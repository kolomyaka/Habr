import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

import App from './app/App';

import './shared/config/i18n/i18n';
import '../src/app/styles/index.scss';
import { ErrorFallback } from '@/widgets/ErrorFalback';
import { StoreProvider } from '@/app/providers/StoreProvider';


const container = document.getElementById('root');

if (!container) {
    throw new Error('Container not found!');
}

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
);
