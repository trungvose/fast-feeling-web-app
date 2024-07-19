import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PlaylistListing from './routes/Listing';
import PlaylistDetail from './routes/Detail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/playlists',
        element: <PlaylistListing />,
      },
      {
        path: '/playlists/:id',
        element: <PlaylistDetail />,
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
