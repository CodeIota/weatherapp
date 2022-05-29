import React from 'react'
import Sunny from '../../assests/Clear.png'
import { convertDate } from '../../helpers/convertDateHelper'

type NextDayProps = {
  day: number,
  min: number,
  max: number
}

const NextDayCard = ({...props}: NextDayProps) => {
  return (
    <div className='bg-mirage p-4'>
                <p className="text-athens-gray text-center text-lg">{convertDate(props.day)}</p>
                <img src={Sunny} alt="sunny img" className='pr-2' />
                <div className='mt-5 mb-3 text-center flex items-center justify-center'>
                    <p className='text-athens-gray'>{props.max}°C</p>
                    <span className='ml-3 mr-3'></span>
                    <p className='text-santas-gray'>{props.min}°C</p>
                </div>
            </div>
  )
}

export default NextDayCard