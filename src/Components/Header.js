import React from 'react'
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs'

function Header() {
  const activeStyles = {
    color: 'black' ,
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
  return (
    <>
    <header>
    <nav className={styles.navbarContainer}>
      <NavLink className={styles.navLinks + " " + styles.homeLink} to="/">#VanLife</NavLink>
      <NavLink className={styles.navLinks + " " + styles.hostLink} style={({ isActive }) => isActive ? activeStyles : null} to="/host">Host</NavLink>
      <NavLink className={styles.navLinks + " " + styles.aboutLink} style={({ isActive }) => isActive ? activeStyles : null} to="/about">About</NavLink>
      <NavLink className={styles.navLinks} style={({ isActive }) => isActive ? activeStyles : null} to="/vans">Vans</NavLink>
      <BsPersonCircle fontSize="1.5em"/>
    </nav>
    </header>
    </>
  )
}

export default Header;