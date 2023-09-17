import React from 'react'
import { DudaCard } from '../components/DudaCard'

export const FeedPage = () => {
  const dudasPublicadasArray = [
    {id:1, username:"David", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:2,username:"Fernando", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:3,username:"Danilo", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:4,username:"Federico", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:5,username:"Daniel", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:6,username:"Fernanda", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:7,username:"Soledad", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
    {id:8,username:"Maite", description:"Omnis, dolor, odio iure rerum facilis provident tempore deserunt excepturi culpa voluptate exercitationem quasi iste error eligendi vel sed illum quae perspiciatis."},
  ]
  

  return (
    <div className='p-4 flex flex-col w-[100%]'>
        <div className="">
            <span className='text-basis font-bold'>Dudas Publicadas</span>
        </div>
        {
          dudasPublicadasArray.map(duda=>{
            return(
              <DudaCard key={duda.id} username={duda.username} description={duda.description}/>
            )
          })
        }

    </div>
  )
}
