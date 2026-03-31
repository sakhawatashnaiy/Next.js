'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {
  const destination=['Paris','Tokyo','NewYork']
const router=useRouter()
  return (
    <div className='flex justify-center items-center text-white  h-full flex-col gap-4'>
      <div className='font-bold text-2xl'>
        Choose Your Destination
      </div>
      <div className='flex flex-col gap-4'>
{destination.map((d,index)=>(
  <div key={index} className='font-bold text-2xl flex items-center justify-center rounded-2xl w-52 h-24 text-black bg-white hover:opacity-50 transition-all' onClick={()=>router.push(`/distination/${d}`)}>
{d}
  </div>
))}
      </div>
    </div>
  )
}

export default Page