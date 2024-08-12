import { useQuery, useQueryClient } from '@tanstack/react-query';
import { BASE_API_URL } from '../core/environment';
import { Playlist, Playlists } from '../types/playlist';

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
  const queryClient = useQueryClient();
  return useQuery<Playlist>({
    queryKey: ['playlist', id],
    queryFn: async () => {
      const response = await fetch(`${BASE_API_URL}/playlists/${id}`);
      return response.json();
    },
    enabled: !!id,
    initialData: () => {
      let data;
      const query = queryClient.getQueryData<Playlists>(['playlists']);
      if (query) {
        data = query.find((playlist) => playlist.id === id);
      }
      return data;
    },
  });
};
