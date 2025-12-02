export type SuccessType<T = Record<string, unknown>> = {
    success: true;
    message: string;
    data: T;
};

export type ErrorType = {
    success: false;
    message: string;
};

export type SpotifyImage = {
    url: string;
    height?: number;
    width?: number;
};

export type SpotifyArtist = {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
};

export type SpotifyAlbum = {
    album_type: string;
    total_tracks: number;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    type: string;
    uri: string;
    artists: SpotifyArtist[];
};

export type SpotifyTrack = {
    album: SpotifyAlbum;
    artists: SpotifyArtist[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    popularity: number;
    type: string;
    uri: string;
    duration_ms: number;
    explicit: boolean;
};

export type SpotifyArtistFull = {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
};

export type SpotifyPlaylist = {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
        display_name: string;
    };
    public: boolean;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
};

export type SpotifySearchResponse = {
    tracks?: {
        href: string;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
        items: SpotifyTrack[];
    };
    artists?: {
        href: string;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
        items: SpotifyArtistFull[];
    };
    albums?: {
        href: string;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
        items: SpotifyAlbum[];
    };
    playlists?: {
        href: string;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
        items: SpotifyPlaylist[];
    };
};

export type SpotifyResponse = Pick<SuccessType, 'success' | 'message'> & {
    data: SpotifySearchResponse;
};

export type TrackType = SpotifyResponse;

export type SpotifyCategory = {
    href: string;
    icons: SpotifyImage[];
    id: string;
    name: string;
};

export type SpotifyCategoriesResponse = {
    categories: {
        href: string;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
        items: SpotifyCategory[];
    };
};

export type CategoriesResponseType = Pick<SuccessType, 'success' | 'message'> & {
    data: SpotifyCategoriesResponse;
};