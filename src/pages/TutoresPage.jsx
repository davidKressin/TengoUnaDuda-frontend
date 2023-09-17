import React from 'react'
import { TutorCardComponent } from '../components/TutorCardComponent'

export const TutoresPage = () => {
  return (
    <div className='p-4 flex flex-col w-[100%]'>
        <div className="">
            <span className='text-basis font-bold'>Tutores Inscritos</span>
        </div>
        <TutorCardComponent/>

    </div>
  )
}
