import { defineStore } from 'pinia'
import axios from 'axios'
import type Weather from '@/types/Weather'

interface WeatherStore {
  weather: Weather
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
      weather: {
        temp: 0,
        weatherType: '',
        nameCity: ''
      },
      queryCity: '',
      weatherEror: ''
    }
  },
  actions: {
    async getWeatherData(): Promise<void> {
      try {
        const response = await axios.get(
          `${this.API__WEATHER}${this.queryCity}&units=metric&appid=${this.API__KEY}`
        )
        const data = response.data

        this.weather = {
          temp: Math.ceil(data.main.temp),
          weatherType: data.weather[0].main,
          nameCity: data.name
        }

        this.weatherEror = ''
      } catch (e) {
        this.weatherReset()
        this.weatherEror = "Sorry, we didn't find anything, please try again"
      }
    },
    getWeatherMyCity(): string {
      const myCity = JSON.parse(localStorage.getItem('auth') || '{}').city
      return myCity
    },
    dateBuilder(): string {
      let d = new Date()
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    },
    weatherReset(): void {
      this.weather = {
        temp: 0,
        weatherType: '',
        nameCity: ''
      }
    }
  }
})
