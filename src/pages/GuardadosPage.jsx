import React from 'react'
import { DudaCard } from '../components/DudaCard'

export const GuardadosPage = () => {
  return (
    <div className='p-4 flex flex-col w-[100%]'>
        <div className="">
            <span className='text-basis font-bold'>Dudas guardadas</span>
        </div>
        <DudaCard/>

    </div>
  )
}
