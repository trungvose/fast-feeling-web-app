import { useQuery } from '@tanstack/react-query';
import { Playlist, Playlists } from '../types/playlist';
import { BASE_API_URL } from '../core/environment';

export const usePlaylists = () => {
  return useQuery<Playlists>({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await fetch(`${BASE_API_URL}/playlists`);
      return response.json();
    },
  });
};

export const usePlaylist = (id: string) => {
  return useQuery<Playlist>({
    queryKey: ['playlists', id],
    queryFn: async () => {
      const response = await fetch(`${BASE_API_URL}/playlists/${id}`);
      return response.json();
    },
    enabled: !!id,
  });
};
