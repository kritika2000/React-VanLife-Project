import React from 'react'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.homeContainer}>
        <p>You got the travel plans, we got the travel vans.</p>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button>Find your van</button>
    </div>
  )
}

export default Home