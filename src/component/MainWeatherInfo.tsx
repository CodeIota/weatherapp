import React from 'react'
import AditionalInfoContent from './AditionalInfoContent'
import SearchComponents from './CurrentInfo/SearchComponents'
import CurrentImageWeather from './CurrentInfo/CurrentImageWeather'
import TodayInfo from './CurrentInfo/TodayInfo'
import Footer from './Footer'
import useFetchCurrent from '../hooks/useFetchCurrent'

const MainWeatherInfo = () => {
  const today = useFetchCurrent('Caracas', 've')
  const todayWeather: {[index: string]:any} = today.weather
  return (
    <div>
      <div className="flex flex-col h-screen bg-mirage">
        <SearchComponents />
        <CurrentImageWeather />
        <TodayInfo name={today.name} temp={today.main.temp} weather={todayWeather.main} date={today.dt}/>
      </div>

      <AditionalInfoContent />
      <Footer />
    </div>
  )
}

export default MainWeatherInfo