import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import axios from 'axios'
import refreshTokenUser from '@/api/axiosRefreshToken'
    
export const WeatherStore = defineStore({
    id: 'Weather',
    state: () => {
        return {
            API__WEATHER: 'https://api.openweathermap.org/data/2.5/weather?q=',
            API__KEY: '2def5dc0742efcf2ebc84923f64167b0',
            weatherKind: {
                clouds: false,
                clear: false,
                mist: false,
                rain: false,
                windy: false,
                snow: false
            },
            weather: '',
            queryCity: '',
        }
    },
    actions: {
        async getWeatherData(queryCity: string) {  
            try {
                const response = await axios.get(`${this.API__WEATHER}${queryCity}&units=metric&appid=${this.API__KEY}`)
                const weather = await response.data
                const kind = await weather.weather[0].main.toLowerCase()
            }   
            catch(e) {
                console.log(e)
            } 
        },
        async getWeatherMyCity() {  
            try {
                const myCity = (JSON.parse(localStorage.getItem('auth') || '{}')).city
                console.log(myCity)
                // const response = await axios.get(`${this.API__WEATHER}${queryCity}&units=metric&appid=${this.API__KEY}`)
                // const weather = await response.data
                // const kind = await weather.weather[0].main.toLowerCase()
            }   
            catch(e) {
                console.log(e)
            } 
        },
    }
})


