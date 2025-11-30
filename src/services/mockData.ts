export const mockData = {
    genres: ['rock', 'pop', 'jazz', 'electronic', 'hip-hop'],
    albums: [
        { id: 'thriller', title: 'Thriller', artist: 'Michael Jackson', type: 'album' },
        { id: 'dark-side', title: 'The Dark Side of the Moon', artist: 'Pink Floyd', type: 'album' },
        { id: 'album', title: 'Album', artist: 'Various Artists', type: 'album' },
    ],
    tracks: [
        { id: 'song1', title: 'Bohemian Rhapsody', artist: 'Queen', type: 'track' },
        { id: 'song2', title: 'Imagine', artist: 'John Lennon', type: 'track' },
        { id: 'track', title: 'Track', artist: 'Various Artists', type: 'track' },
    ]
};

export const getData = async (name: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const decodedName = decodeURIComponent(name).toLowerCase();

    // Check albums FIRST
    const album = mockData.albums.find(a => a.id === decodedName || a.title.toLowerCase() === decodedName);
    if (album) {
        return { type: 'album', data: album };
    }

    // Then check tracks
    const track = mockData.tracks.find(t => t.id === decodedName || t.title.toLowerCase() === decodedName);
    if (track) {
        return { type: 'track', data: track };
    }

    // Finally check genres
    if (mockData.genres.includes(decodedName)) {
        return { type: 'genre', data: { name: decodedName } };
    }

    // Default to album if not found (to show Bring component)
    return { type: 'album', data: { id: decodedName, title: decodedName, artist: 'Unknown', type: 'album' } };
};
