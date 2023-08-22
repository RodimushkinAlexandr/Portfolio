import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import type MoviesList from '@/types/ListMoviesTypes'
import type Filters from '@/types/FiltersMovies'

interface MoviesState {
    filters: Filters
    amountListsInGroup: number
    requestFilters: RequestFilters
    moviesList: MoviesList[] | []
    moviesGroup: MoviesList[][]
    nameMoviesGroup: string[]
}

export const MoviesStore = defineStore({
    id: 'Movies',
    state: (): MoviesState => {
        return {
            filters: {
                genres: [],
                countries: [],
                years: []
            },
            requestFilters: {
                genre: '',
                country: '',
                year: ''
            },
            amountListsInGroup: 3,
            moviesGroup: [],
            nameMoviesGroup: [],
            moviesList: [],
        }
    },
    actions: {
        async getAllFilters(): Promise<void> {
            try {
                const filters = await api.get('/movie/getFilters/')
                this.filters = filters.data
                let randomMoviesGenre = this.randomNumberMoviesGroup()

                while(randomMoviesGenre.length) {
                    const numberGenre = Number(randomMoviesGenre.shift())
                    
                    this.requestFilters.genre = this.filters.genres[numberGenre]
                    this.nameMoviesGroup.push(this.filters.genres[numberGenre])

                    await this.getMoviesUseFilters()
                    this.moviesGroup.push(this.moviesList)
                }
            } catch(e) {
                console.log(e)
            } finally {
                this.requestFilters.genre = ''
            }
        },
        async getMoviesUseFilters(): Promise<void> {
            try{
                const filters = await api.post('/movie/filter/', this.requestFilters)
                this.moviesList = filters.data
            } catch(e) {
                console.log(e)
            }
        },
        randomNumberMoviesGroup(): string[] {
            let genreRandom: string[] = []
            try {
                let map = new Map();
            
                for (let i = 0; i < this.amountListsInGroup; i++) {
                    let genreNumberRandom = Math.floor(Math.random() * this.filters.genres.length)
                    !map.has(genreNumberRandom) ? map.set(genreNumberRandom, genreNumberRandom) : i-- 
                }
                genreRandom = Object.values(Object.fromEntries(map))
            }
            catch(e) {
                console.log(e)
            }
            return genreRandom
        },
    }
})


interface RequestFilters {
    genre: string
    country: string
    year: string
}




