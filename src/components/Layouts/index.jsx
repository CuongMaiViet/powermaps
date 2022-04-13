import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

const Layouts = () => {
  return (
    <div className="app">
      <Navigation />

      <div className="pages__container">
        <Outlet />
      </div>
    </div>
  )
}

export default Layouts
