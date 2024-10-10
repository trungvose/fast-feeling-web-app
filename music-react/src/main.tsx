import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MusicRootLayout from './routes/Root';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PlaylistListing } from './routes/Listing';
import { PlaylistDetail } from './routes/Detail';
import { Cat1 } from './routes/Cat1';
import { Cat2 } from './routes/Cat2';
import { Debugging } from './routes/Debugging';
import { Demo0Layout } from './routes/0-vehicles-slow/Demo0-Layout';
import { Vehicles } from './routes/0-vehicles-slow/Vehicles';
import { VehicleDetails } from './routes/0-vehicles-slow/VehicleDetails';
import { Cats } from './routes/1-cat-images/Cats';
import { LazyLoadIFrames } from './routes/1-cat-images/Iframes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Navigate to='/view-transition/cat1' />,
      },
      {
        path: '/debugging',
        element: <MusicRootLayout />,
        children: [
          {
            path: '',
            element: <Debugging />,
          },
        ],
      },
      {
        path: 'view-transition',
        element: <MusicRootLayout />,
        children: [
          {
            path: 'playlists',
            element: <PlaylistListing />,
          },
          {
            path: 'playlists/:id',
            element: <PlaylistDetail />,
          },
          {
            path: 'cat1',
            element: <Cat1 />,
          },
          {
            path: 'cat2',
            element: <Cat2 />,
          },
        ],
      },
      {
        path: 'demo0',
        element: <Demo0Layout />,
        children: [
          {
            path: '',
            element: <Navigate to='vehicles' />,
          },
          {
            path: 'vehicles',
            element: <Vehicles />,
          },
          {
            path: 'vehicles/:vehicleId',
            element: <VehicleDetails />,
          },
        ],
      },
      {
        path: 'demo1',
        children: [
          {
            path: '',
            element: <Navigate to='cats' />,
          },
          {
            path: 'cats',
            element: <Cats />,
          },
          {
            path: 'iframes',
            element: <LazyLoadIFrames />,
          },
        ],
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
