import { defineStore } from 'pinia'
import api from '../api/axiosClient'
import type Movie from '@/types/Movie/Movie'
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
        nameFilter: 'genres'
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
      } catch (e) {
        console.log(e)
      }
    },
    async getFavoritesMovies(moviesId: string[]): Promise<void> {
      try {
        const movies = await api.get('/movie/favorites/', { params: { ...moviesId } })
        this.moviesList = movies.data
      } catch (e) {
        console.log(e)
      }
    },
    async getMoviesUseFilters(): Promise<void> {
      try {
        this.moviesList = []
        const filters = await api.get('/movie/filter/', { params: { ...this.requestFilters } })
        this.moviesList = filters.data

        this.resetRequestFilters()
      } catch (e) {
        console.log(e)
      }
    },
    async nameSearchMovies(): Promise<void> {
      try {
        this.moviesList = []
        const name = { name: this.searchMovies }
        const search = await api.get('/movie/search/', { params: { name: this.searchMovies } })

        if (search.data.length) {
          this.moviesList = search.data
        } else {
          this.error = "Sorry, we didn't find anything, please try again"
        }
      } catch (e) {
        console.log(e)
      }
    },
    async getMoviesGorup(): Promise<void> {
      try {
        const moviesGroup = await api.get('/movie/groupMovies/', {
          params: { ...this.requestGroup }
        })
        this.moviesGroup = moviesGroup.data
      } catch (e) {
        console.log(e)
      }
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
  [genre: string]: string
  country: string
  year: string
}

interface RequestGroup {
  amountSelected: number
  amountSelectedLength: number
  nameFilter: string
}
