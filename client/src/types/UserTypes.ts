import type Movie from "./MovieTypes"

export default interface User {
    username: string
    city: string
    genreMovies: string
    favoritesMovies: string[]
}