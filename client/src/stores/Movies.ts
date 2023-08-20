import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import refreshTokenUser from '@/api/axiosRefreshToken'

interface MoviesState {
    filters: Filters

}

export const MoviesStore = defineStore({
    id: 'Movies',
    state: (): MoviesState => {
        return {
            filters: {
                genres: [],
                countries: [],
                year: []
            },

        }
    },
    actions: {
        async getAllFilters(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const filters = await api.get('/movie/getFilters/', {headers: {'Authorization' : `Bearer ${token}`}})
                console.log(filters)
            } catch(e) {
                console.log(e)
            }
        }
    }
})

interface Filters {
    genres: string[]
    countries: string[]
    year: string[]
}

