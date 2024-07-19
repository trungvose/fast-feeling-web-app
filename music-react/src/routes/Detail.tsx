import { useParams } from 'react-router-dom';

const playlists = [
  {
    id: 1,
    cover: 'https://via.placeholder.com/150',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these chill tunes.',
    songs: Array.from({ length: 10 }, (_, i) => `Song ${i + 1}`),
  },
  {
    id: 2,
    cover: 'https://via.placeholder.com/150',
    name: 'Workout Beats',
    description: 'Get pumped with these high-energy tracks.',
    songs: Array.from({ length: 10 }, (_, i) => `Song ${i + 1}`),
  },
  {
    id: 3,
    cover: 'https://via.placeholder.com/150',
    name: 'Top Hits',
    description: 'The latest and greatest hits.',
    songs: Array.from({ length: 10 }, (_, i) => `Song ${i + 1}`),
  },
  {
    id: 4,
    cover: 'https://via.placeholder.com/150',
    name: 'Classic Rock',
    description: 'Timeless rock anthems.',
    songs: Array.from({ length: 10 }, (_, i) => `Song ${i + 1}`),
  },
];

const PlaylistDetail = () => {
  const { id } = useParams();
  const playlist = playlists.find((p) => p.id === parseInt(id));

  if (!playlist) {
    return <p>Playlist not found</p>;
  }

  return (
    <div className='p-4'>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <img
          src={playlist.cover}
          alt={playlist.name}
          className='w-full h-40 object-cover rounded-lg mb-4'
        />
        <h2 className='text-2xl font-semibold mb-2'>{playlist.name}</h2>
        <p className='text-gray-600 mb-4'>{playlist.description}</p>
        <div className='grid gap-4'>
          {playlist.songs.map((song, index) => (
            <div
              key={index}
              className='bg-gray-200 h-20 rounded-lg flex items-center justify-center'
            >
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
