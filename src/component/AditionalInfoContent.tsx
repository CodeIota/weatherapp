import React from 'react'
import NextsDaysInfo from './nextDayComponents/NextsDaysInfo'
import ToydayHighlightsInfo from './TodayHighlights/ToydayHighlightsInfo'

const AditionalInfoContent = () => {
  return (
    <div className="bg-vulcan-900 font-raleway p-10">
       
    <NextsDaysInfo />
    <ToydayHighlightsInfo />

    </div>    
    )

}

export default AditionalInfoContent