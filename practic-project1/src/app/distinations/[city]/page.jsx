'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg from "@/assests/paris.jpg"
import tokyoImg from "@/assests/tokyo.jpg"
import nyImg from "@/assests/new york.webp"
import Image from 'next/image'
function Page({params}) {
    const {city: city } = useParams()
  return (
    <div className='text-white mt-24 w-1/2'>
      {city} is the beautiful city
      {
        city=="Paris" &&  <Image src={parisImg} width={400} height={400} alt='paris img'/>
      }
       {
        city=="Tokyo" &&  <Image src={tokyoImg} width={400} height={400} alt='tokyo img'/>
      }
       {
        city=="NewYork" &&  <Image src={nyImg} width={400} height={400} alt='ny img'/>
      }
     
    </div>
  )
}

export default Page