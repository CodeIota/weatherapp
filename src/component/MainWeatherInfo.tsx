import React from 'react'
import AditionalInfoContent from './AditionalInfoContent'
import SearchComponents from './CurrentInfo/SearchComponents'
import CurrentImageWeather from './CurrentInfo/CurrentImageWeather'
import TodayInfo from './CurrentInfo/TodayInfo'
import useFetchCurrent from '../hooks/useFetchCurrent'

const MainWeatherInfo = () => {
  const today = useFetchCurrent('Caracas', 've')
  const todayWeather: {[index: string]:any} = today.weather
  return (
    <div className='w-full md:flex md:flex-row '>
      <div className="flex flex-col h-screen bg-mirage md:w-1/3 md:min-h-full  ">
      <SearchComponents />
        <CurrentImageWeather />
        <TodayInfo name={today.name} temp={today.main.temp} weather={todayWeather[0]?.main} date={today.dt}/>
      </div>

      <AditionalInfoContent />
    </div>
  )
}

export default MainWeatherInfo