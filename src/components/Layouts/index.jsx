import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import Navigation from '../Navigation'

const Layouts = () => {
  return (
    <div className="app">
      <Banner />
      <Navigation />

      <div className="pages__container">
        <Outlet />
      </div>
    </div>
  )
}

export default Layouts
