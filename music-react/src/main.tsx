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
        element: <Navigate to='/dashboard' />,
      },
      {
        path: '/dashboard',
        async lazy() {
          const { Dashboard } = await import(
            './routes/code-splitting/Dashboard'
          );
          return {
            Component: Dashboard,
          };
        },
      },
      {
        path: '/profile',
        async lazy() {
          const { Profile } = await import('./routes/code-splitting/Profile');
          return {
            Component: Profile,
          };
        },
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
              const { Debugging } = await import(
                './routes/view-transition/Debugging'
              );
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
              const { PlaylistListing } = await import(
                './routes/view-transition/Listing'
              );
              return {
                Component: PlaylistListing,
              };
            },
          },
          {
            path: 'playlists/:id',
            async lazy() {
              const { PlaylistDetail } = await import(
                './routes/view-transition/Detail'
              );
              return {
                Component: PlaylistDetail,
              };
            },
          },
          {
            path: 'cat1',
            async lazy() {
              const { Cat1 } = await import('./routes/view-transition/Cat1');
              return {
                Component: Cat1,
              };
            },
          },
          {
            path: 'cat2',
            async lazy() {
              const { Cat2 } = await import('./routes/view-transition/Cat2');
              return {
                Component: Cat2,
              };
            },
          },
          {
            path: '',
            element: <Navigate to='playlists' />,
          },
        ],
      },
      {
        path: 'vehicles',
        async lazy() {
          const { VehicleLayout } = await import(
            './routes/0-vehicles-slow/VehicleLayout'
          );
          return {
            Component: VehicleLayout,
          };
        },
        children: [
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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
