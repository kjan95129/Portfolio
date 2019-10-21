import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <Link to='/' className='home-nav-container'>
      <header>
        <h3 className='home-nav'>
          &#8249;
        </h3>
      </header>
    </Link>
  )
}

export default BackButton
