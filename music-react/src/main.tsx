import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Listing from './routes/Listing';
import PlaylistDetail from './routes/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/playlists',
        element: <Listing />,
      },
      {
        path: '/playlists/:id',
        element: <PlaylistDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
