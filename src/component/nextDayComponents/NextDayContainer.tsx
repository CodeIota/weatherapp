import React from 'react'

type PropsNextDayContainer = {
    children: React.ReactNode
}

const NextDayContainer = (props: PropsNextDayContainer) => {
  return (
    <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 gap-4'>
        {props.children}
        </div>
    </div>
  )
}

export default NextDayContainer