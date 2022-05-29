import { useEffect, useState } from 'react'
import { getCurrentDay } from '../services/getCurrentDay'
import ICurrent from '../types/ICurrent'

const useFetchCurrent = (city: string, country: string) => {
    const initialCurrentData = {
        cord: {
          lon: 0,
          lat: 0
        },
        weather: {
          id: 0,
          main: "",
        },
        main: {
          temp: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0
        },
        wind: {
          speed: 0,
          deg: 0
        },
        dt: 0,
        name: ""
      
      
      }

    const [current, setCurrent] = useState<ICurrent>(initialCurrentData)
    
    useEffect(() => {
    const callApi = async () => {
      const fetchedCurrentInfo = await getCurrentDay(city, country)
      setCurrent(fetchedCurrentInfo)
    }

    callApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return current
}

export default useFetchCurrent