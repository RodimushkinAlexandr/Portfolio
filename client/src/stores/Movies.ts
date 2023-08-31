import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import type Movie from '@/types/Movie/MovieTypes'
import type Filters from '@/types/Movie/FiltersMovies'
import type MovieGroup from '@/types/Movie/MovieGroup'

interface MoviesState {
    filters: Filters
    requestFilters: RequestFilters
    requestGroup: RequestGroup
    moviesList: Movie[] | []
    moviesGroup: MovieGroup | {}
    lookMovie: Movie | undefined
    showLookMovie: boolean
    searchMovies: string
    error: string    
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
            requestGroup: {
                amountSelected: 4,
                amountSelectedLength: 20,
                nameFilter: "genres"
            },
            moviesGroup: {},
            moviesList: [],
            lookMovie: undefined,
            showLookMovie: false,
            searchMovies: '',
            error: ''
        }
    },
    actions: {
        async getAllFilters(): Promise<void> {
            try {
                const filters = await api.get('/movie/getFilters/')
                this.filters = filters.data
            } catch(e) {
                console.log(e)
            } 
        },
        async getMoviesUseFilters(): Promise<void> {
            try{
                const filters = await api.post('/movie/filter/', this.requestFilters)
                this.moviesList = filters.data

                this.resetRequestFilters()
            } catch(e) {
                console.log(e)
            }
        },
        async nameSearchMovies(): Promise<void> {
            try{
                const search = await api.post('/movie/search/', {name: this.searchMovies.toLowerCase()})

                if(search.data.length) {this.moviesList = search.data}
                else {this.error = "Sorry, we didn't find anything, please try again"}
            } catch(e) {
                console.log(e)
            }
        },
        async getMoviesGorup(): Promise<void> {
            try{
                const moviesGroup = await api.post('/movie/groupMovies/', this.requestGroup)
                this.moviesGroup = moviesGroup.data
                
            } catch(e) {
                console.log(e)
            }
        },
        getFavoritesGenre (): void {
            
        },
        resetRequestFilters(): void {
            this.requestFilters = {
                genre: '',
                country: '',
                year: ''
            }
        }
    }
})


interface RequestFilters {
    genre: string
    country: string
    year: string
}

interface RequestGroup {
    amountSelected: number,
    amountSelectedLength: number,
    nameFilter: string
}








