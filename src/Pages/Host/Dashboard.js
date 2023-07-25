import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';
import { BiSolidStar } from 'react-icons/bi'
import Vans from './Vans';

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerContainer}>
        <h1>Welcome!</h1>
        <div className={styles.infoContainer}>
          <p>Income last <span>30 days</span></p>
          <p>Details</p>
        </div>
        <p>$2,260</p>
        </div>
        <div className={styles.reviewContainer}>
          <p>Review score</p>
          <p><BiSolidStar style={{ color: 'orange' }}/> <b>5.0</b>/5</p>
          <p>Details</p>
        </div>
      <div className={styles.vanListContainer}>
        <Vans/>
      </div>
    </div>
  )
}

export default Dashboard