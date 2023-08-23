import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import refreshTokenUser from '@/api/axiosRefreshToken'
import type User from '@/types/UserTypes'
import type Movie from '@/types/MovieTypes'


interface SettingsState {
    user: User
}

export const SettingsStore = defineStore({
    id: 'Settings',
    state: (): SettingsState => {
        return {
            user: {
                username: '',
                city: '',
                genreMovies: '',
                favoritesMovies: []
            }
        }
    },
    actions: {
        getUserData(): void {
            const userData = JSON.parse(localStorage.getItem('auth') || '{}')
            this.user.username = userData.username
            this.user.city = userData.city
            this.user.genreMovies = userData.genreMovies
            this.user.favoritesMovies = userData.favoritesMovies
        },
        async patchUser(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const user = await api.patch(`/auth/update/`, this.user, {headers: {'Authorization' : `Bearer ${token}`}})
                this.setUserData(user.data)
            } catch(e) {
                console.log(e)
            }
        },
        setMoviesFavorites(movieId: string):void {
            try{
                this.user.favoritesMovies.push(movieId)
                this.patchUser()
            } catch(e) {
                console.log(e)
            }
        },
        IncludesMovieInFavorites(movieId: string): boolean {
            const isInclude = this.user.favoritesMovies.includes(movieId)
            return isInclude
           
        },
        setUserData(user: User): void {
            const userData = JSON.parse(localStorage.getItem('auth') || '{}')
            userData.username = user.username
            userData.city = user.city
            userData.genreMovies = user.genreMovies
            userData.favoritesMovies = user.favoritesMovies
            localStorage.setItem('auth', JSON.stringify(userData))
        }
    }
})

