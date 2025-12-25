import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

async function enableMocking() {
    // 개발 환경에서만 MSW 실행
    if (!import.meta.env.DEV) {
        return;
    }

    const { worker } = await import('./mocks/browser');

    // ⭐ 반드시 await
    await worker.start({
        onUnhandledRequest: 'warn',
        quiet: true,
    });
}

const rootElement = document.getElementById('root')!;

enableMocking().then(() => {
    createRoot(rootElement).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    );
});
