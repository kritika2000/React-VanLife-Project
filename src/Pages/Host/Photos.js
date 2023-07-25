import React from 'react'
import styles from './Photos.module.css'
import { useLocation, useOutletContext } from 'react-router-dom'

function Photos() {
  const {state: van} = useLocation();
  const { van: vanOutlet } = useOutletContext();
  console.log(vanOutlet);
  return (
    <div className={styles.photosContainer}>
      <img src={van.imageUrl} alt={van.name}/>
    </div>
  )
}

export default Photos