import React from 'react'
import styles from './Income.module.css';

function Transaction({ price, date }){
  return <div className={styles.transaction}>
    <p>{price}</p>
    <p>{date}</p>
  </div>
}

function Income() {
  return (
    <div className={styles.incomeContainer}>
      <h2>Income</h2>
      <p>Last <span>30 days</span></p>
      <p>$2,260</p>
      <div className={styles.graphContainer}>
        <div className={styles.barsContainer}>
          <div className={styles.barContainer}>
            <div></div><div>Ju</div>
          </div>
          <div className={styles.barContainer}>
            <div></div><div>Au</div>
          </div>
          <div className={styles.barContainer}>
            <div></div><div>Se</div>
          </div>
          <div className={styles.barContainer}>
            <div></div><div>Oc</div>
          </div>
          <div className={styles.barContainer}>
            <div></div><div>No</div>
          </div>
          <div className={styles.barContainer}>
            <div></div><div>De</div>
          </div>
          
        </div>
        
      </div>
      <h4>Your transactions(3)</h4>
      <div className={styles.transactionsContainer}>
        <Transaction price="$720" date="1/12/22"/>
        <Transaction price="$560" date="10/11/22"/>
        <Transaction price="$980" date="23/11/22"/>
      </div>
    </div>
  )
}

export default Income