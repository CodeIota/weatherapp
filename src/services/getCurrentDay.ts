import axios from 'axios'

const baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather?'
const apikey = process.env.REACT_APP_API_KEY

export const getCurrentDay = async (city:string, country:string) => {
    try {
        const response = await axios.get(
            baseUrl + `q=${city},${country}&units=metric&appid=${apikey}`
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
}