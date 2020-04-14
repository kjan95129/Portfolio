import React from 'react'
import resume from '../static/Kevin_Jan_Resume.pdf'

function Header() {
  return (
    <header className='intro'>
      <div className='container intro-body'>
        <h1 className='intro-name animated fadeInDown'>
          <span className='blue'>-</span>kevin jan
          <span className='blue'>-</span>
        </h1>
        <p className='animated fadeInUp'>Hi! Happy you're here. A little about me...
          <br/>
          <br/>
          Currently a UI Developer @ Apple on Music &amp; Podcasts, working with EmberJS &amp; JavaScript
          <br />
          <br />
          Previously a Full Stack Engineer @ Cisco Systems, working with ReactJS, JavaScript, &amp; Python
        </p>
        <div className='navigation topBottomBordersOut animated fadeInUp'>
          <a target='_blank' rel='noopener noreferrer' href={resume}>RESUME</a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kjan95129/'>LINKEDIN</a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/kjan95129'>GITHUB</a>
          <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@kevinjan'>MEDIUM</a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/ImKevinJan'>TWITTER</a>
        </div>
      </div>
    </header>
  )
}

export default Header
