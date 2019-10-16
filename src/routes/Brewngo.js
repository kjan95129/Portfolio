import React, { useEffect } from 'react'
import BackButton from '../components/CaseStudy/BackButton'
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader'

function Brewngo() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='brewngo'>
      <BackButton />
      <CaseStudyHeader
        theme='brewngo'
        link='https://bruvida.com/'
        description="Landing page for the world's first portable hardware coffee & tea brewer"
        projectRole='UI/UX Developer. Summer 2016.'
      />
      <section className='content animated fadeInUp'>
        <div className='content-block'>
            <h1>Startup Culture</h1>
            <h3>Designing and developing for a product</h3>
            <p>As a startup company partnered with Rady School of Management's startup accelerator, 
                brewngo was still in its infancy. The biggest pro of being such a new company was that 
                there was a lot of room for creative freedom. Branding wasn't solidified, nor was 
                the product name or the mission statement. Working with such a new concept allowed 
                me to be in constant communication with every team and also allowed me to fully immerse 
                myself in the startup culture.
            </p>
            <br />
            <div className='text-center'>
              <a target='_blank' rel='noopener noreferrer' className='btn btn-default btn-lg' href='http://bruvida.com/'>Check it out!</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Brewngo
