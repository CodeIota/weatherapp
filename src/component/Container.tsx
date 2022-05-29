import React from 'react'

type Props = {
    children?: React.ReactNode
}

const Container: React.FC<Props> = ({children}) => {
  return (
    <div className='flex font-raleway'>
        {children}
    </div>
    )
}
export default Container