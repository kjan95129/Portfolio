import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
  const link = `/${props.link}/`
  
  return (
    <div className='media'>
      <img className='media__image' src={props.image} alt='' />
      <div className='media__body'>
        <h2>{props.header}</h2>
        <p>{props.description}</p>
        <div className='text-center'>
          {props.caseStudy ?
            <Link to={link}>
              <button className='btn btn-default link-button'>
                More >>
              </button>
            </Link>
            : <a target='_blank' rel='noopener noreferrer' href={props.externalLink} className='btn btn-default link-button'>
              Check it out!
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
