import React from 'react'
import styles from './Details.module.css';
import { useLocation, useOutletContext } from 'react-router-dom';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}  

function Details() {
  const {state: van} = useLocation();
  const { van: vanOutlet } = useOutletContext();
  console.log(vanOutlet);
  return (
    <div className={styles.detailsContainer}>
    <p><b>Name: </b>{van.name}</p>
    <p><b>Category: </b>{capitalizeFirstLetter(van.type)}</p>
    <p><b>Description: </b>{van.description}</p>
  </div>
  )
}

export default Details