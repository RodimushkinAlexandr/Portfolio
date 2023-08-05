import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovies = defineStore({
    id: 'movies', 
    state: () => {
      return {
        moviess: 'button',
        email: '',
        password: '',
        cityWeather: '',
        userId: ''
      } 
    },
    actions: {
      async addNewTodo() {
        try{
          const data = await axios({
            method: 'post',
            url: 'http://localhost:5000/todo/',
            data: {
              
            }
          })
        } catch(e) {

        }
      },
      async deleteUser() {
        try {
          const data = await axios.delete(`http://localhost:5000/users/${this.userId}`)
        } catch(e) {
          console.log(e)
        }
      },
      async getMovies() {
        try {
          const data = await axios({
            method: 'post',
            url: 'http://localhost:5000/movie/filter',
            data: {
              "year": "2022",
              "countries": [
                  {
                      "name": "США"
                  }
              ],
              "genres": [
                  {"name": "приключения"}
              ]
            },
          })
          console.log(data)
        } catch(e) {
          console.log(e)
        }
      }
    }
})
