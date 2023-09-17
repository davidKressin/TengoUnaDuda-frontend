import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { SecondaryLayout } from '../layouts/SecondaryLayout'

import { FeedPage, MisDudas, GuardadosPage, TutoresPage } from '../pages/index'

export const AppRouter = () => {
  return (
    <SecondaryLayout>

    <Routes>
        <Route path="/" element={<FeedPage/>}/>
        <Route path="/dudas-publicadas" element={<FeedPage/>}/>
        <Route path="/tutores" element={<TutoresPage/>}/>

        {/* Logueados  */}
        <Route path="/guardados" element={<GuardadosPage/>}/>
        <Route path="/mis-dudas" element={<MisDudas/>}/>
        <Route path="/publicar" element={<TutoresPage/>}/>
        
        <Route path="/*" element={<FeedPage/>}/>
    </Routes>
    </SecondaryLayout>
  )
}
