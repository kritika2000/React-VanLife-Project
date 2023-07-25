import React from 'react'
import styles from './Reviews.module.css';
import { BiSolidStar } from 'react-icons/bi'

function Rating({ stars, rating }){
  return <div className={styles.rating}>
      <span>{stars} stars</span>
      <span  style={{backgroundColor: stars == 5 ? 'orange' : null}}></span>
      <p>{rating}</p>
  </div>
}

function Review({name, date, review}){
  return <div className={styles.reviewContainer}>
    <div><BiSolidStar style={{color: 'orange'}}/> <BiSolidStar style={{color: 'orange'}}/> <BiSolidStar style={{color: 'orange'}}/> <BiSolidStar style={{color: 'orange'}}/> <BiSolidStar style={{color: 'orange'}}/></div>
    <p>{name} <span>{date}</span></p>
    <p>{review}</p>
    <hr/>
  </div>
}

function Ratings(){
  return <div className={styles.ratingContainer}>
    <div className={styles.ratingHeaderContainer}>
      <span>5.0</span>
      <span><BiSolidStar style={{color: 'orange'}}/> overall rating</span>
    </div>
    <Rating stars={5} rating="100%"/>
    <Rating stars={4} rating="0%"/>
    <Rating stars={3} rating="0%"/>
    <Rating stars={2} rating="0%"/>
    <Rating stars={1} rating="0%"/>
    <h4>Reviews(2)</h4>
    <Review name="Elliot" date="December 1, 2022" review="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue.
     Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"/>
    <Review name="Sandy" date="November 23, 2022" review="This is our third time using the Modest Explorer for our travels 
    and we love it! No complaints, absolutely perfect!"/>
  </div>
}

function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.headingContainer}>
        <h2>Your Reviews</h2>
        <p>last <span>30 days</span></p>
      </div>
      <Ratings/>
    </div>
  )
}

export default Reviews