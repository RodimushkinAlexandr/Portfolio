import api from './axiosClient'

const refreshTokenUser = async (): Promise<string | undefined> => {
    try {
        const auth = JSON.parse(localStorage.getItem('auth') || '{}')
        const refresh_token = auth['refresh_token']
        const username = auth['username']
        
        const data = await api.post('/auth/refresh/', {refresh_token, username})

        auth.access_token = data.data.access_token
        localStorage.setItem('auth', JSON.stringify(auth))

        return data.data.access_token

    } catch (e) {
        console.log(e)
    }
}

export default refreshTokenUser