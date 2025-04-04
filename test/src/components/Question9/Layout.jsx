import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Fotter from './Fotter'

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
