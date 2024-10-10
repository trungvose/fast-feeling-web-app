import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        async lazy() {
          const { MusicRootLayout } = await import('./routes/Root');
          return {
            Component: MusicRootLayout,
          };
        },
        children: [
          {
            path: '',
            async lazy() {
              const { Debugging } = await import('./routes/Debugging');
              return {
                Component: Debugging,
              };
            },
          },
        ],
      },
      {
        path: 'music',
        async lazy() {
          const { MusicRootLayout } = await import('./routes/Root');
          return {
            Component: MusicRootLayout,
          };
        },
        children: [
          {
            path: 'playlists',
            async lazy() {
              const { PlaylistListing } = await import('./routes/Listing');
              return {
                Component: PlaylistListing,
              };
            },
          },
          {
            path: 'playlists/:id',
            async lazy() {
              const { PlaylistDetail } = await import('./routes/Detail');
              return {
                Component: PlaylistDetail,
              };
            },
          },
          {
            path: 'cat1',
            async lazy() {
              const { Cat1 } = await import('./routes/Cat1');
              return {
                Component: Cat1,
              };
            },
          },
          {
            path: 'cat2',
            async lazy() {
              const { Cat2 } = await import('./routes/Cat2');
              return {
                Component: Cat2,
              };
            },
          },
        ],
      },
      {
        path: 'vehicles',
        async lazy() {
          const { Demo0Layout } = await import(
            './routes/0-vehicles-slow/Demo0-Layout'
          );
          return {
            Component: Demo0Layout,
          };
        },
        children: [
          {
            path: '',
            element: <Navigate to='vehicles' />,
          },
          {
            path: '',
            async lazy() {
              const { Vehicles } = await import(
                './routes/0-vehicles-slow/Vehicles'
              );
              return {
                Component: Vehicles,
              };
            },
          },
          {
            path: ':vehicleId',
            async lazy() {
              const { VehicleDetails } = await import(
                './routes/0-vehicles-slow/VehicleDetails'
              );
              return {
                Component: VehicleDetails,
              };
            },
          },
        ],
      },
      {
        path: 'lazy',
        children: [
          {
            path: '',
            element: <Navigate to='cats' />,
          },
          {
            path: 'cats',
            async lazy() {
              const { Cats } = await import('./routes/1-cat-images/Cats');
              return {
                Component: Cats,
              };
            },
          },
          {
            path: 'iframes',
            async lazy() {
              const { LazyLoadIFrames } = await import(
                './routes/1-cat-images/Iframes'
              );
              return {
                Component: LazyLoadIFrames,
              };
            },
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
