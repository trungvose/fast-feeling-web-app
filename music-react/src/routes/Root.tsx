import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <nav className='bg-gray-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <a href='/' className='text-lg font-bold'>
            Music React
          </a>
          <div>
            <Link className='mr-4 hover:text-gray-400' to="/cat1">
              Cat
            </Link>
            <Link className='mr-4 hover:text-gray-400' to="/playlists">
              Playlists
            </Link>
            <Link className='mr-4 hover:text-gray-400' to="/debugging">
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
