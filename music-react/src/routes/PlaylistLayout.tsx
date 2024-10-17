import { Link, Outlet } from 'react-router-dom';

export function MusicRootLayout() {
  return (
    <>
      <nav className='bg-gray-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link className='text-lg font-bold' to='/music/playlists'>
            Music React
          </Link>
          <div>
            <Link className='mr-4 hover:text-gray-400' to='/vehicles'>
              Vehicles
            </Link>
            <Link className='mr-4 hover:text-gray-400' to='/music/cat1'>
              Cat
            </Link>
            <Link className='mr-4 hover:text-gray-400' to='/music/playlists'>
              Playlists
            </Link>
            <Link className='mr-4 hover:text-gray-400' to='/debugging'>
              Debugging
            </Link>
          </div>
        </div>
      </nav>
      <div className='flex flex-col flex-1'>
        <Outlet></Outlet>
      </div>
    </>
  );
}
