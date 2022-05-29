import { LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

const SearchComponents = () => {
  return (
    <div className='flex justify-between'>
        <button className="bg-storm-gray px-4 py-2 my-2 mx-3 shadow-md text-athens-gray">Search for places</button>
        <button className="bg-storm-gray p-2 my-2 mx-3 shadow-md rounded-full">
        <LocationMarkerIcon className='text-athens-gray w-6' />
        </button>
    </div>
  )
}

export default SearchComponents