import React from 'react'
import cloudBg from '../../assests/Cloud-background.png'
import cloudy from '../../assests/HeavyRain.png'

const CurrentImageWeather = () => {
  return (
    <div className="relative flex justify-center items-center h-1/3">
        <img src={cloudBg} alt="cloudy-background" className="absolute h-60 w-full opacity-5" />
        <img src={cloudy} alt="cloudy" className="absolute h-40" />
    </div>
  )
}

export default CurrentImageWeather