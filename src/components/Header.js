import React from 'react'
import resume from 'static/Kevin_Jan_Resume.pdf'

function Header() {
  return (
    <header className='intro'>
      <div className='container intro-body'>
        <h1 className='intro-name animated fadeInDown'>
          <span className='blue'>-</span>kevin jan
          <span className='blue'>-</span>
        </h1>
        <p className='animated fadeInUp'>Hi! Glad you found your way here.
          <br/>
          <br/> UCSD Human-Computer Interaction graduate looking for full-time opportunities in the realm of UX/UI Research/Design
          &#38; Front-end Development.</p>
        <div className='navigation topBottomBordersOut animated fadeInUp'>
          <a target='_blank' rel='noopener noreferrer' href={resume}>RESUME</a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kjan95129/'>LINKEDIN</a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/kjan95129'>GITHUB</a>
          <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@kevinjan'>MEDIUM</a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/smolasianboy/'>FITNESS</a>
        </div>
      </div>
    </header>
  )
}

export default Header
