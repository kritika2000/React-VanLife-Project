import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  function navigateToVans(){
    navigate("/vans");
  }

  return (
    <div className={styles.homeContainer}>
        <p>You got the travel plans, we got the travel vans.</p>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button onClick={navigateToVans}>Find your van</button>
    </div>
  )
}

export default Home