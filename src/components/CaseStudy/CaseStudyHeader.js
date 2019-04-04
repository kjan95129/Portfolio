import React from 'react'

function CaseStudyHeader(props) {
  return (
    <section className='banner-container animated fadeInDown text-center'>
      <a target='_blank' rel='noopener noreferrer' href={props.link}>
        <h1 className='banner-title'>
            <span className={props.theme}>-</span>{props.theme}
            <span className={props.theme}>-</span>
        </h1>
      </a>
      <p>{props.description}</p>
      <p>{props.projectRole}</p>
    </section>
  )
}

export default CaseStudyHeader
