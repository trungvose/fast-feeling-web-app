import { NavLink, Outlet } from 'react-router-dom';

export const Demo0Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="font-bold">Fast Feeling Web App</div>
        <NavLink to="/demo1" className="text-white hover:underline">
          Demo 1
        </NavLink>
      </header>
      <div className="flex flex-grow">
        <nav className="w-52 bg-gray-200 p-4">
          <ul>
            <li>
              <NavLink
                to="/demo0/vehicles"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo0/drivers"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Drivers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo0/trips"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Trips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo0/maintenance"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Maintenance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo0/reports"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo0/settings"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo0/help"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'bg-blue-300' : 'hover:bg-blue-300'}`
                }
              >
                Help
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="relative flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <footer className="bg-gray-700 text-white p-4 text-center">
        @2024 Trung
      </footer>
    </div>
  );
};
