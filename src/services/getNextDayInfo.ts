import axios from "axios"

const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?`

const getNextDayInfo = async (lat: number, lon: number) => {
    try {
        const response = await axios
        .get(
            baseUrl + 
            `lat=${lat}&lon=${lon}&exclude=hourly,current,alerts,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            )
        return response.data.daily.slice(1, 6)
    } catch (error) {
        console.error(error)
    }
}

export default getNextDayInfo