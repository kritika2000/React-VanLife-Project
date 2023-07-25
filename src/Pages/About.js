import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <img src='../images/about-hero.png'/>
      <div className={styles.infoContainer}>
      <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
      <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className={styles.destinationContainer}>
        <p>Your destination is waiting</p>
        <p>Your van is ready</p>
        <button>Explore our vans</button>
      </div>
    </div>
  )
}

export default About