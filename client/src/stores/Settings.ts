import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import refreshTokenUser from '@/api/axiosRefreshToken'
import type User from '@/types/User'

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
                _id: '',
                favoritesMovies: []
            }
        }
    },
    actions: {
        getUserData(): void {
            const userData = JSON.parse(localStorage.getItem('auth') || '{}')
            this.user = userData
        },
        async patchUser(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const user = await api.patch(`/auth/update/`, this.user, {headers: {'Authorization' : `Bearer ${token}`}})
                this.setUserData()
            } catch(e) {
                console.log(e)
            }
        },
        setUserData(): void {
            let userData = JSON.parse(localStorage.getItem('auth') || '{}')
            userData = this.user
            localStorage.setItem('auth', JSON.stringify(userData))
        },
    }
})

