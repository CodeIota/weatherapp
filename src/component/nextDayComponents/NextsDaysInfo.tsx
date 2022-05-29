import React, { useEffect, useState } from 'react'
import getNextDayInfo from '../../services/getNextDayInfo'
import INextDay from '../../types/INextDay'
import NextDayCard from './NextDayCard'
import NextDayContainer from './NextDayContainer'

const NextsDaysInfo = () => {
  const initialCurrentNextDays: Array<INextDay> = [{
      dt: 0,
      temp: {
          min: 0,
          max: 0
      },
      weather: {
          main: "",
          description: ""
      }
  }]

  const [nextDays, setNextDays] = useState<INextDay[]>(initialCurrentNextDays)

  useEffect(() => {
    
    const callApi = async () => {
      const fetchedCurrentNextDays = await getNextDayInfo(30.40, 49.89)
      setNextDays(fetchedCurrentNextDays)
    }
    callApi()
  }, [])
  
  console.log(nextDays[0])
  return (
    <NextDayContainer>
      
      {nextDays.map(nextDay => <NextDayCard day={nextDay.dt} min={nextDay.temp.min} max={nextDay.temp.max}/>)}

    </NextDayContainer>
  )
}

export default NextsDaysInfo