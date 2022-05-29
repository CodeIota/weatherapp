import React from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { convertDate } from '../../helpers/convertDateHelper'

type currentInfoProps = {
  name: string,
  temp?: number,
  weather: string
  date?: number
}

const TodayInfo: React.FC<currentInfoProps> = ({...currentInfo}: currentInfoProps) => {


  return (
    <div className='flex flex-col items-center justify-center'>
            <h1 className='text-7xl  text-athens-gray text-center m-6'>{currentInfo.temp}
            <span className='text-4xl text-santas-gray font-medium'>°C</span>  
            </h1> 
            <h3 className='text-2xl text-santas-gray text-center font-semibold mt-3 inline-none'>{currentInfo.weather}</h3>
            <div className='text-xl text-santas-gray text-center font-normal my-9'>
              <p>Today <span className='mx-5'>•</span> {` ${convertDate(currentInfo.date as number)}`}</p>
            </div>
            <h3 className=' text-xl text-santas-gray mt-4 text-center font-normal inline-flex'>
              <span><LocationMarkerIcon className='text-athens-gray mx-2 w-5 ' /></span>
              {currentInfo.name}
            </h3>
        </div>
  )
}

export default TodayInfo