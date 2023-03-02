import { render } from 'react-dom';
import App from './app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import '../src/app/styles/index.scss';
import { ErrorFallback } from 'widgets/ErrorFalback';

render(
    <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
);