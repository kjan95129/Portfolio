import React from 'react'

function Post() {
  return (
    <section className='contact'>
      <div className='container'>
        <hr/>
        <div className='row media__container text-center'>
          <div className='col-md-12'>
            <h2>Contact Me</h2>
            <p>Let's get in touch. I'd love to have a chat!</p>
            <ul className='list-inline'>
              <li>
                <a target='_blank' rel='noopener noreferrer' href='mailto:kjan95129@gmail.com' className='btn btn-default btn-lg'>
                  <i className='fa fa-envelope'></i> Email
                </a>
              </li>
              <li>
                  <a target='_blank' rel='noopener noreferrer' href='https://github.com/kjan95129' className='btn btn-default btn-lg'>
                    <i className='fa fa-github'></i> Github
                  </a>
              </li>
              <li>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kevin-jan-2a2839105?trk=nav_responsive_tab_profile_pic' className='btn btn-default btn-lg'>
                    <i className='fa fa-linkedin'></i> LinkedIn
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post