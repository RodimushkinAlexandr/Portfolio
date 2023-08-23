import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import type Movie from '@/types/MovieTypes'
import type Filters from '@/types/FiltersMovies'

interface MoviesState {
    filters: Filters
    amountListsInGroup: number
    requestFilters: RequestFilters
    moviesList: Movie[] | []
    moviesGroup: Movie[][]
    nameMoviesGroup: string[]
    lookvoie: Movie | undefined
    showLookMovie: boolean
    searchMovies: string
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
            lookvoie: undefined,
            showLookMovie: false,
            searchMovies: ''
        }
    },
    actions: {
        async getAllFilters(): Promise<void> {
            try {
                const filters = await api.get('/movie/getFilters/')
                this.filters = filters.data
                console.log(filters.data)
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
        // async getMoviesUseSearch(): Promise<void> {
        //     try{
        //         const search = await api.get('/movie/search/', {name: this.searchMovies})
        //         console.log(search)
        //     } catch(e) {
        //         console.log(e)
        //     }
        // },
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




