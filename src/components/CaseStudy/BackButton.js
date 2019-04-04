import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <Link to='/'>
      <header>
        <h3 className='home-nav'>
          ↩
        </h3>
      </header>
    </Link>
  )
}

export default BackButton
