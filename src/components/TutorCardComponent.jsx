import React from 'react';

export const TutorCardComponent = () => {
  return (
    <div className='w-[80%] bg-slate-600 p-3 flex flex-row text-center rounded-full shadow-lg'>
      <div className="w-1/4">
        <div className='bg-white h-[60px] w-[60px] rounded-full border-solid border-black border-2 mx-auto overflow-hidden'>
          <img
            className='w-[100%] h-[100%] object-cover'
            src='https://media.istockphoto.com/id/1255163297/vector/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-sign-logo-black-silhouette.jpg?s=612x612&w=0&k=20&c=p6azyhUBIcWx6-aXVRPUTveaVqbTA2bNXpBoGQjEB68='
            alt='Avatar del tutor'
          />
        </div>
        <p className="mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Nombre del Tutor
          </a>
        </p>
      </div>

      <div className="w-1/2 text-sm text-justify">
        <p>Áreas de experiencia:</p>
        <ul className="list-disc list-inside">
          <li>Área 1</li>
          <li>Área 2</li>
          <li>Área 3</li>
        </ul>
      </div>

      <div className="w-1/4 flex flex-col justify-center items-center cursor-pointer">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
          Ver Aportes
        </button>
      </div>
    </div>
  );
};

