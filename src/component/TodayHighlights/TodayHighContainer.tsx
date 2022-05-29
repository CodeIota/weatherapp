import React from 'react'

type TodayHighContainerProps = {
    children: React.ReactNode
}

const TodayHighContainer= (props: TodayHighContainerProps) => {
  return (
    <div className='mt-6'>
         <p className='text-athens-gray font-semibold text-2xl'>Today's highlights</p>
         <div className='flex flex-col gap-4 items-center justify-center'>
            {props.children}
         </div>
    </div>
  )
}

export default TodayHighContainer