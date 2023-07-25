import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Van.module.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Van() {
  const activeStyles = {
    color: 'black' ,
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
  const { state: van } = useLocation();
  return (
    <div className={styles.aboutVanContainer}>
    <Link to=".." className={styles.backToAllVans}><AiOutlineArrowLeft/><span>Back to all vans</span></Link>
    <div className={styles.vanContainer}>
      <div className={styles.headingContainer}>
        <img src={van.imageUrl} alt={van.name}/>
        <div className={styles.headingInfoContainer}>
        <button style={{backgroundColor: van.type === 'simple' ? '#FF8C38' : van.type === 'rugged' ? 'darkgreen' : 'black'}}>{capitalizeFirstLetter(van.type)}</button>
        <p>{van.name}</p>
        <p>${van.price}<span>/day</span></p>
        </div>
      </div>
      <div className={styles.linksContainer}>
        {/* Passing the current van details on navigation using state property. */}
        <NavLink to={`details`} end style={({ isActive }) => isActive ? activeStyles : null} state={van}>Details</NavLink>
        <NavLink to={`pricing`} style={({ isActive }) => isActive ? activeStyles : null} state={van}>Pricing</NavLink>
        <NavLink to={`photos`} style={({ isActive }) => isActive ? activeStyles : null} state={van}>Photos</NavLink>
      </div>
      <div className={styles.outletContainer}>
        {/* Another way to pass the current van property is using useOutletContext hook.
          Better way to use is the outletContext hook as state can only be passed when we have links/navlinks.
        */}
        <Outlet context={{ van }}/>
      </div>
    </div>
    </div>
  )
}

export default Van