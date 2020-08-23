
export interface Movie {
    imageUrl: string,
    name: string,
    description?: string
}

export interface MovieList {
    name: string,
    content: Array<Movie>
}

export interface AppData {
    mainAtraction: Movie
    featuredMovies: Array<Movie>
    moviesList: Array<MovieList>
}