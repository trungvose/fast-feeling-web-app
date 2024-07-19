import { Link } from 'react-router-dom';
import { usePlaylists } from '../hooks/use-playlists';

const PlaylistListing = () => {
  const { data: playlists, isLoading } = usePlaylists();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Music Playlists</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {playlists!.map((playlist) => (
          <Link
            className='flex flex-col flex-1'
            key={playlist.id}
            to={`/playlists/${playlist.id}`}
          >
            <div className='bg-white rounded-lg shadow-md p-4 flex flex-col flex-1'>
              <img
                loading='lazy'
                src={playlist.image_url}
                alt={playlist.name}
                className='object-cover rounded-lg mb-4'
              />
              <h2 className='text-xl font-semibold mb-2'>{playlist.name}</h2>
              <p className='text-gray-600 mb-auto'>{playlist.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlaylistListing;
