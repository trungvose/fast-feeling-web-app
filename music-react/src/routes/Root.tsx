import { Link, Outlet } from 'react-router-dom';

export default function MusicRootLayout() {
  return (
    <>
      <nav className='bg-gray-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <a href='/' className='text-lg font-bold'>
            Music React
          </a>
          <div>
            <Link className='mr-4 hover:text-gray-400' to="/view-transition/cat1">
              Cat
            </Link>
            <Link className='mr-4 hover:text-gray-400' to="/view-transition/playlists">
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
