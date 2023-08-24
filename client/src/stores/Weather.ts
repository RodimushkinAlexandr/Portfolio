import {defineStore } from 'pinia'
import axios from 'axios'
import type Weather from '@/types/WeatherTypes'

interface WeatherStore {
    weather: Weather | null
    API__WEATHER: string
    API__KEY: string
    queryCity: string
    weatherEror: string
}
    
export const WeatherStore = defineStore({
    id: 'Weather',
    state: (): WeatherStore => {
        return {
            API__WEATHER: 'https://api.openweathermap.org/data/2.5/weather?q=',
            API__KEY: '2def5dc0742efcf2ebc84923f64167b0',
            weather: null,
            queryCity: '',
            weatherEror: ''
        }
    },
    actions: {
        async getWeatherData(queryCity:string): Promise<void> {  
            try {
                const response = await axios.get(`${this.API__WEATHER}${queryCity}&units=metric&appid=${this.API__KEY}`)
                const data = response.data

                this.weather = {
                    temp: Math.ceil(data.main.temp),
                    weatherType: data.weather[0].main,
                    nameCity: data.name
                }

            }   
            catch(e) {
                this.weather = null
                this.weatherEror = "Sorry, we didn't find anything, please try again"
            } 
        },
        getWeatherMyCity(): string {  
            const myCity = (JSON.parse(localStorage.getItem('auth') || '{}')).city
            return myCity
        },

        dateBuilder(): string {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`       
        },
    }
})



