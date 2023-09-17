import React from 'react'
import { NavLink } from 'react-router-dom'

export const VerticalMenu = () => {
  return (
    <div className='bg-white h-screen text-black text-sm text-center p-5 max-w-[300px]'>
        <h1 className='text-base font-bold'>Tengo Una Duda</h1>
        
        {/* Profile */}
        <div className='bg-white h-[50px] w-[50px] rounded-full 
            border-solid border-black border-2 mx-auto mt-1 overflow-hidden'>
            <img className='w-[100%]' src='https://media.istockphoto.com/id/1255163297/vector/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-sign-logo-black-silhouette.jpg?s=612x612&w=0&k=20&c=p6azyhUBIcWx6-aXVRPUTveaVqbTA2bNXpBoGQjEB68='/>
        </div>
        <p><a href="#" rel="noopener noreferrer">NickName</a></p>
        
        <div className='d-flex flex-col justify-start text-white my-3'>
            <div className="my-1">
                <NavLink className="text-white" to="/dudas-publicadas">
                    <button className='w-[100%]'>Dudas Publicadas</button>
                </NavLink>
            </div>
            <div className="my-1">
                <NavLink className="text-white" to="/mis-dudas">
                    <button className='w-[100%]'>Mis Dudas</button>
                </NavLink>
            </div>
            <div className="my-1">
                <NavLink className="text-white" to="/guardados">
                    <button className='w-[100%]'>Guardados</button>
                </NavLink>
            </div>
            <div className="my-1">
                <NavLink className="text-white" to="/tutores">
                    <button className='w-[100%]'>Tutores</button>
                </NavLink>
            </div>
        </div>


        <div className='text-white my-5'>
            <NavLink className="text-white" to="/publicar">
                <button>
                    Publicar Duda
                </button>
            </NavLink>
        </div>


        <div className="my-3 text-white flex flex-row">
            <div className='bg-white text-black w-5 h-5 disabled p-0 rounded-full'>C
            </div>
            <input className='disabled:opacity-70 w-10' type="number" defaultValue={20}/>
            <button className='bg-black h-line-center w-5 h-5 p-0 rounded-full'>+</button>
        </div>



        
    </div>
  )
}