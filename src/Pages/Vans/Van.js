import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import styles from './Van.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Van(){
    /* 
      Passing the data from Vans component to Van component on navigation.
      This is a better approach than fetching the Van detail again as we've already fetched
      the data.
    */
    const { state } = useLocation();
    const van = state.van;
    const filter = state.filter;
    const searchParams = Object.fromEntries(new URLSearchParams(filter));
    return (
      <div className={styles.vanContainer}>
        <Link to={`..${filter ? `?${filter}` : ``}`} className={styles.backToAllVans}><AiOutlineArrowLeft/><span>Back to {filter ? searchParams.type : 'all'} vans</span></Link>
        <img src={van.imageUrl} alt={van.name}/>
        <button style={{backgroundColor: van.type === 'simple' ? '#FF8C38' : van.type === 'rugged' ? 'darkgreen' : 'black'}}>{capitalizeFirstLetter(van.type)}</button>
        <p>{van.name}</p>
        <p>${van.price}/day</p>
        <p>{van.description}</p>
        <button>Rent this van</button>
      </div>
    )
}

export default Van