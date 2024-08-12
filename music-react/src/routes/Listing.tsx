import { Link } from 'react-router-dom';
import { usePlaylists } from '../hooks/use-playlists';
import { Container } from './Container';

const PlaylistListing = () => {
  const { data: playlists, isLoading } = usePlaylists();

  if (isLoading) {
    return <h2 className='text-6xl text-white'>Loading...</h2>;
  }

  return (
    <Container>
      <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
        {playlists!.map((playlist) => (
          <Link
            className='flex flex-col flex-1'
            key={playlist.id}
            to={`/playlists/${playlist.id}`}
            unstable_viewTransition
          >
            <div className='bg-white rounded-lg shadow-md p-4 flex flex-col flex-1'>
              <img
                style={{ viewTransitionName: `cover-${playlist.id}` }}
                loading='lazy'
                src={playlist.image_url}
                alt={playlist.name}
                className='object-cover aspect-square rounded-lg mb-4'
              />
              <h2
                style={{ viewTransitionName: `title-${playlist.id}` }}
                className='text-xl font-semibold mb-2'
              >
                {playlist.name}
              </h2>
              <p
                className='text-gray-600 mb-auto line-clamp-2'
                dangerouslySetInnerHTML={{
                  __html: playlist.description,
                }}
              ></p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default PlaylistListing;
