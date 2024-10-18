import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nProvider } from 'react-aria';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import { useLocale } from './hooks/use-locale';
import './index.css';
import { router } from './router';

const queryClient = new QueryClient();

const App = () => {
  const locale = useLocale();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider locale={locale}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </I18nProvider>
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
