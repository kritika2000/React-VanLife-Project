import React from 'react'
import styles from './HostLayout.module.css'
import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  const activeStyles = {
    color: 'black' ,
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
  return (
    <>
    <nav className={styles.hostLayoutContainer}>
        {/* end prop will stop matching the route after /host, so /host/income will not make the /host route active anymore. */}
        {/* "." represents "/host" */}
        <NavLink to="." end className={styles.navLinks} style={({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
        <NavLink to="income" className={styles.navLinks} style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
        <NavLink to="vans" className={styles.navLinks} style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
        <NavLink to="reviews" className={styles.navLinks} style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default HostLayout