export interface Playlist {
  id: string;
  name: string;
  description: string;
  spotify_url: string;
  image_url: string;
}

export type Playlists = Playlist[];
