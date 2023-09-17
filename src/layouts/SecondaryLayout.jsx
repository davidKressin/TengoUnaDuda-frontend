

import React from 'react'
import { VerticalMenu } from '../components/VerticalMenu'

export const SecondaryLayout = ({children}) => {
  return (
    <div className="flex flex-row w-screen">
        <VerticalMenu/>
        {children}
    </div>
  )
}
