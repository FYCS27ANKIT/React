import React from 'react'
import Nav from './Nav'
import Fotter from './Fotter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Fotter/>
    </div>
  )
}

export default Layout
