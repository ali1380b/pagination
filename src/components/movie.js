const movies = [
    {
        id: 1,
        name: 'deadpool 2',
    },
    {
        id: 2,
        name: 'matrix',
    },
    {
        id: 3,
        name: 'RESIDENT EVIL',
    },
    {
        id: 4,
        name: 'Jolt',
    },
    {
        id: 5,
        name: 'Sicario Day Of The Soldado',
    },
]

export function getMovies(start, end) {
    return movies.slice(start, end);
}

export function getMoviesCount() {
    return movies.length
}

