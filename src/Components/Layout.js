import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
        <Header/>
        <div className='main'>
          {/* outlet component denotes the component rendered for a specific route. */}
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout