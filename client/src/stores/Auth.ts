import {defineStore} from 'pinia'
import axios from 'axios'
import api from '../api/axiosClient'

interface AuthState {
    authUser: AuthUser
    isAuth: boolean
}
    
export const AuthStore = defineStore({
    id:'Auth',
    state: (): AuthState => {
        return {
            authUser: {
                username: '',
                password: ''
            },
            isAuth: false  
        }
    },
    actions: {
        async login() {
            try {
                const userData = await api.post('/auth/login/', this.authUser)
                console.log(userData)

                if(userData.status == 200) {
                    this.isAuth = true
                    localStorage.setItem('auth', JSON.stringify(userData.data))
                }
            } catch (e) {
                console.log(e)
            }
        },
        async registration() {
            try {
                const userData = await api.post('/auth/registration/', this.authUser)
                console.log(userData)

                if(userData.status == 200) {
                    this.isAuth = true
                    localStorage.setItem('auth', JSON.stringify(userData.data))
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
})

interface AuthUser {
    username: string
    password: string
}


