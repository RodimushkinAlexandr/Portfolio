import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useRegistration = defineStore ({
    id: 'registration',
    state: () => {
        return {
            email: '',
            password: '',
            cityWeather: '',
            userId: ''
        }
    },
    actions: {
        async registration() {
            try{
                const data = await axios({
                    method: 'post',
                    url: 'http://localhost:5000/users/',
                    data: {
                        email: this.email,
                        password: this.password,
                        cityWeather: this.cityWeather
                    }
                })
            this.userId = data.data._id
            } catch(e) {
                console.log(e)
            } finally {
                
            }
        },
        async exitAccount() {
            try{    
                this.userId = ''
            }catch(e) {
                console.log(e)
            }
        }
    }
})