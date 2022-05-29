import React from 'react'

type PropsNextDayContainer = {
    children: React.ReactNode
}

const NextDayContainer = (props: PropsNextDayContainer) => {
  return (
      <div className='grid grid-cols-2 gap-4 md:flex md:flex-row md:place-content-between'>
      {props.children}
      </div>
  )
}

export default NextDayContainer