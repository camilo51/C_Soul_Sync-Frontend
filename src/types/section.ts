import { SpotifyAlbum, SpotifyArtistFull, SpotifyPlaylist, SpotifyTrack } from "./answers";

export type SectionType = {
  title: string;
  url: string;
  data: SpotifyTrack[] | SpotifyArtistFull[] | SpotifyAlbum[] | SpotifyPlaylist[];
}