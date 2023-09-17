import React from 'react'
import { DudaCard } from '../components/DudaCard'

export const MisDudas = () => {
  return (
    <div className='p-4 flex flex-col w-[100%]'>
        <div className="">
            <span className='text-basis font-bold'>Mis Dudas</span>
        </div>
        <DudaCard/>

    </div>
  )
}
