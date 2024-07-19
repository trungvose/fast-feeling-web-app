export interface Playlist {
  id: number;
  name: string;
  description: string;
  spotify_url: string;
  image_url: string;
}

export type Playlists = Playlist[];
