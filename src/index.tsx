import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ServiceProvider } from '@services';

async function enableMocking() {
    // 개발 환경에서만 MSW 실행
    if (!import.meta.env.DEV) {
        return;
    }

    const { worker } = await import('./mocks/browser');

    await worker.start({
        onUnhandledRequest: 'warn',
        quiet: true,
    });
}

const rootElement = document.getElementById('root')!;

enableMocking().then(() => {
    createRoot(rootElement).render(
        <BrowserRouter>
            <ServiceProvider>
                <App />
            </ServiceProvider>
        </BrowserRouter>,
    );
});
