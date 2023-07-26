import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Vans.module.css'
import { useNavigate } from 'react-router-dom';

function Van(van){
    const navigate = useNavigate();
  
    function navigateToVan(){
      navigate(`/host/vans/${van.id}/details`, { state: van });
    }
  
    return (
      <div className={styles.vanContainer}>
        <img src={van.imageUrl} alt={van.name}/>
        <div className={styles.vanInfoContainer}>
          <p>{van.name}</p>
          <p>${van.price}/day</p>
        </div>
        <button className={styles.editStyle} onClick={navigateToVan}>Details</button>
      </div>
    )
  }

  
function Vans() {
  const [vans, setVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/host/vans").then(response => {
      setVans(response.data.vans);
      setIsLoading(false);
    });
  }, [])

  const allVanItems = vans.map((van) => <Van key={van.id} {...van}/>)

  return (
    <div className={styles.vansContainer}>
      <h2>Your Listed Vans</h2>
      {isLoading ? <div className={styles.isLoading}>Loading...</div> : <div className={styles.vansListContainer}>
        {allVanItems}
      </div>
      }
    </div>
  )
}

export default Vans