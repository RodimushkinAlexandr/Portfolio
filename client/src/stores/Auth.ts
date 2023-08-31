import {defineStore} from 'pinia'
import api from '../api/axiosClient'
import type AuthUser from '@/types/UserAuthTypes'

interface AuthState {
    authUser: AuthUser
    isAuth: boolean
    errorAuth: string
}
    
export const AuthStore = defineStore({
    id:'Auth',
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
                if(userData.status == 200) {
                    localStorage.setItem('auth', JSON.stringify(userData.data))
                    this.userAuthentication()
                }
                
            } catch (e: any) {
               setTimeout(() => this.errorAuth = e.response.data.message, 500)
            }
        },
        async registration(): Promise<void> {
            try {
                const userData = await api.post('/auth/registration/', this.authUser)
                if(userData.status == 201) await this.login()

            } catch (e: any) {
                setTimeout(() => this.errorAuth = e.response.data.message, 500)
            }
        },
        async userAuthentication(): Promise<void> {
            if (localStorage.getItem('auth')) {
                try{
                    const user = JSON.parse(localStorage.getItem('auth') || '{}')
                    this.isAuth = true;
                    this.authUser.username = user.username
                } catch(e) {
                    console.log(e)
                }

            }
        },
    }
})



