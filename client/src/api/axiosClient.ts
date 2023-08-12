import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_MY_ENV_VARIABLE
})

export default instance