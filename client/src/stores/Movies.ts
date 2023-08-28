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
            amountListsInGroup: 6,
            moviesGroup: [],
            nameMoviesGroup: [],
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
            try {
                while(this.amountListsInGroup) {
                    
                    this.requestFilters.genre = this.filters.genres[this.amountListsInGroup]
                    this.nameMoviesGroup.push(this.filters.genres[this.amountListsInGroup])

                    await this.getMoviesUseFilters()
                    this.moviesGroup.push(this.moviesList)
                    --this.amountListsInGroup
                }
            } catch(e) {
                console.log(e)
            } finally {
                this.requestFilters.genre = ''
                this.moviesList = []
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






