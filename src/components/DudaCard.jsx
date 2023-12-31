import React from 'react'

export const DudaCard = ({username="", header="Header Duda", description="",}) => {
  return (
    <div className='w-[80%] min-h-[100px] bg-slate-600 m-4 p-3 flex flex-row text-center rounded-full'>
        <div className="w-1/4">
            <div className='bg-white h-[50px] w-[50px] rounded-full 
                border-solid border-black border-2 mx-auto mt-1 overflow-hidden'>
                <img className='w-[100%]' src='https://media.istockphoto.com/id/1255163297/vector/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-sign-logo-black-silhouette.jpg?s=612x612&w=0&k=20&c=p6azyhUBIcWx6-aXVRPUTveaVqbTA2bNXpBoGQjEB68='/>
            </div>
            <p><a href="#" target="_blank" rel="noopener noreferrer">{username}</a></p>
        </div>


        <div className="w-1/2 text-xs text-justify">
            <p className='font-bold'>
              {header}
            </p>

            {description}
        </div>


        <div className="w-1/4 flex flex-col justify-center items-center cursor-pointer">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Responder
          </button>
        </div>

    </div>
  )
}
