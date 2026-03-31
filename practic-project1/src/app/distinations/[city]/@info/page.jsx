'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {
    const { city: city } = useParams()
  return (
    <div className='text-white mt-24 w-1/2'>
      {city} is the best city.
    </div>
  )
}

export default Page