import { PaperAirplaneIcon } from '@heroicons/react/solid'
import React from 'react'

const WindStatus = () => {
  return (
    <div className='bg-mirage mt-6 py-6 px-16 w-full'>
        <div className='text-athens-gray text-center'>
            <p className='text-lg'>Wind Status</p>
            <p className='text-7xl font-bold my-5'>7<span className='text-4xl font-medium'>mph</span></p>
            <div className='flex items-center justify-center'>
            <span className="bg-storm-gray p-1 my-1 mx-2 rounded-full">
                <PaperAirplaneIcon className='text-athens-gray w-3' />
            </span>
                <p>WSW</p>
            </div>
        </div>
    </div>
  )
}

export default WindStatus