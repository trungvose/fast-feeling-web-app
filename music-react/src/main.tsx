import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import PlaylistListing from './routes/Listing';
import PlaylistDetail from './routes/Detail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cat1 } from './routes/Cat1';
import { Cat2 } from './routes/Cat2';
import { Debugging } from './routes/Debugging';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Navigate to='/cat1' />,
      },
      {
        path: '/playlists',
        element: <PlaylistListing />,
      },
      {
        path: '/playlists/:id',
        element: <PlaylistDetail />,
      },
      {
        path: '/cat1',
        element: <Cat1 />,
      },
      {
        path: '/cat2',
        element: <Cat2 />,
      },
      {
        path: 'debugging',
        element: <Debugging />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
