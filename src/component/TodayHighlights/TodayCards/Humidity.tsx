import React from 'react'

const Humidity = () => {
  return (
    <div className='bg-mirage mt-6 py-6 px-16 w-auto'>
        <div className='text-athens-gray text-center'>
            <p className='text-lg'>Humidity</p>
            <p className='text-7xl font-bold my-5'>7<span className='text-3xl font-medium'>%</span></p>
            
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-athens-gray">0%</span>
                <span className="text-base font-medium text-athens-gray">50%</span>
                <span className="text-sm font-medium text-athens-gray">100%</span>
            </div>

            <div className="w-full rounded-full h-2.5 bg-athens-gray">
                <div className="bg-yellow-300 h-2.5 rounded-full" style={{width: '45%'}}></div>
            </div>
        </div>
    </div>
)
}

export default Humidity