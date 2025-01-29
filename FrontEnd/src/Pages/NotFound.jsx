import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const NotFound = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="notFound"/>
        <h1>Look's Like You're Lost</h1>
        <p>We can't Find The Page You Are Looking For!</p>
        <Link to={'/'}>Back To Home <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
    </section>
  )
}

export default NotFound