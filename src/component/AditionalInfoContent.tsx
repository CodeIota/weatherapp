import React from 'react'
import Footer from './Footer'
import NextsDaysInfo from './nextDayComponents/NextsDaysInfo'
import ToydayHighlightsInfo from './TodayHighlights/ToydayHighlightsInfo'

const AditionalInfoContent = () => {
  return (
    <div className="bg-vulcan-900 font-raleway p-10 md:w-2/3 md:px-24 md:p-4">
       
    <NextsDaysInfo />
    <ToydayHighlightsInfo />
    <Footer />
    </div>    
    )

}

export default AditionalInfoContent