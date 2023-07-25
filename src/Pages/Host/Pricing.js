import React from 'react'
import styles from './Pricing.module.css'
import { useLocation, useOutletContext } from 'react-router-dom'

function Pricing() {
  const {state: van} = useLocation();
  const { van: vanOutlet } = useOutletContext();
  console.log(vanOutlet);
  return (
    <div className={styles.pricingContainer}>
      <p>${van.price}.00 <span>/day</span></p>
    </div>
  )
}

export default Pricing