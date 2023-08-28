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
                genreMovies: '',
                _id: ''
            }
        }
    },
    actions: {
        getUserData(): void {
            const userData = JSON.parse(localStorage.getItem('auth') || '{}')
            this.user.username = userData.username
            this.user.city = userData.city
            this.user.genreMovies = userData.genreMovies
            this.user._id = userData._id
        },
        async patchUser(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const user = await api.patch(`/auth/update/`, this.user, {headers: {'Authorization' : `Bearer ${token}`}})
                this.setUserData()
                console.log(user)
            } catch(e) {
                console.log(e)
            }
        },
        setUserData(): void {
            const userData = JSON.parse(localStorage.getItem('auth') || '{}')
            userData.username = this.user.username
            userData.city = this.user.city
            userData.genreMovies = this.user.genreMovies
            userData._id = this.user._id
            localStorage.setItem('auth', JSON.stringify(userData))
        }
    }
})

