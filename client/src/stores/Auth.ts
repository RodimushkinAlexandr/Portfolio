import { defineStore } from 'pinia'
import api from '../api/axiosClient'
import type AuthUser from '@/types/UserAuth'

interface AuthState {
  authUser: AuthUser
  isAuth: boolean
  errorAuth: string
}

export const AuthStore = defineStore({
  id: 'Auth',
  state: (): AuthState => {
    return {
      authUser: {
        username: '',
        password: ''
      },
      isAuth: false,
      errorAuth: ''
    }
  },
  actions: {
    async login(): Promise<void> {
      try {
        const userData = await api.post('/auth/login/', this.authUser)
        if (userData.status == 200) {
          localStorage.setItem('auth', JSON.stringify(userData.data))
          this.errorAuth = ''
          this.isAuth = true
        }
      } catch (e: any) {
        this.errorAuth = e.response.data.message
      }
    },
    async registration(): Promise<void> {
      try {
        const userData = await api.post('/auth/registration/', this.authUser)
        if (userData.status == 201) await this.login()
      } catch (e: any) {
        this.errorAuth = e.response.data.message
      }
    }
  }
})
