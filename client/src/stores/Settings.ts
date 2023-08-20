import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import refreshTokenUser from '@/api/axiosRefreshToken'
import type User from '@/types/UserTypes'


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
                genreMovies: ''
            }
        }
    },
    actions: {
        getUserData(): void {
            const userData = JSON.parse(localStorage.getItem('auth') || '{}')
            this.user.username = userData.username
            this.user.city = userData.city
            this.user.genreMovies = userData.genreMovies
        },
        async patchUser(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const user = await api.post(`/auth/change/`, this.user, {headers: {'Authorization' : `Bearer ${token}`}})

                console.log(user)
            } catch(e) {

            }
        },
    }
})

