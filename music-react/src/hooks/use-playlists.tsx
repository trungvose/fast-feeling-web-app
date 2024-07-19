import { useQuery } from '@tanstack/react-query';
import { Playlist, Playlists } from '../types/playlist';

export const usePlaylists = () => {
  return useQuery<Playlists>({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/api/playlists');
      return response.json();
    },
  });
};

export const usePlaylist = (id: string) => {
  return useQuery<Playlist>({
    queryKey: ['playlists', id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3001/api/playlists/${id}`);
      return response.json();
    },
    enabled: !!id,
  });
};
