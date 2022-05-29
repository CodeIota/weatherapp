import React from 'react'
import AirPressure from './TodayCards/AirPressure'
import Humidity from './TodayCards/Humidity'
import Visibility from './TodayCards/Visibility'
import WindStatus from './TodayCards/WindStatus'
import TodayHighContainer from './TodayHighContainer'

const ToydayHighlightsInfo = () => {
  return (
    <TodayHighContainer>
        <WindStatus />
        <Humidity />
        <Visibility />
        <AirPressure />
    </TodayHighContainer>
  )
}

export default ToydayHighlightsInfo