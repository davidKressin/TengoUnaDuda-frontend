import React from 'react'
import { DudaCard } from '../components/DudaCard'

export const FeedPage = () => {

  

  return (
    <div className='p-4 flex flex-col w-[100%]'>
        <div className="">
            <span className='text-basis font-bold'>Dudas Publicadas</span>
        </div>
        <DudaCard/>

    </div>
  )
}
