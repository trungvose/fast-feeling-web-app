import { Link } from 'react-router-dom';

const playlists = [
  {
    id: 1,
    cover: 'https://via.placeholder.com/150',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these chill tunes.',
  },
  {
    id: 2,
    cover: 'https://via.placeholder.com/150',
    name: 'Workout Beats',
    description: 'Get pumped with these high-energy tracks.',
  },
  {
    id: 3,
    cover: 'https://via.placeholder.com/150',
    name: 'Top Hits',
    description: 'The latest and greatest hits.',
  },
  {
    id: 4,
    cover: 'https://via.placeholder.com/150',
    name: 'Classic Rock',
    description: 'Timeless rock anthems.',
  },
];

const Listing = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Music Playlists</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {playlists.map((playlist) => (
          <Link key={playlist.id} to={`/playlists/${playlist.id}`} unstable_viewTransition>
            <div className='bg-white rounded-lg shadow-md p-4'>
              <img
                src={playlist.cover}
                alt={playlist.name}
                className='w-full h-40 object-cover rounded-lg mb-4'
              />
              <h2 className='text-xl font-semibold mb-2'>{playlist.name}</h2>
              <p className='text-gray-600'>{playlist.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listing;
