import React from 'react'
import ProjectCard from '../components/ProjectCard'
import grapeLogo from '../static/cards/grapelogo.png'
import clickndigLogo from '../static/cards/clickndig.png'
import brewngoLogo from '../static/cards/brewngo.png'
import violetLogo from '../static/cards/violet.png'
import teamwatchLogo from '../static/cards/teamwatch.png'
import buildacatLogo from '../static/cards/buildacat.png'
import wwgfbtLogo from '../static/cards/wwgfbt.png'

const projects = [
  {
    link: 'wwgfbt',
    externalLink: 'https://wwgfbt.com/',
    image: wwgfbtLogo,
    header: 'did someone say boba???',
    description: 'Web application to help you choose where to go for bubble tea when you\'re feeling indecisive'
  },
  {
    link: 'teamwatch',
    externalLink: 'https://soccer-app-a33d8.firebaseapp.com/index.html',
    image: teamwatchLogo,
    header: 'keep track of your team',
    description: 'Progressive Web Application that allows users to manage small-scale soccer teams & games',
  },
  {
    link: 'violet',
    externalLink: '',
    image: violetLogo,
    header: 'valet everywhere.',
    description: 'Mobile application concept for a peer-to-peer valet service where individuals can sign up as either valets or users',
    caseStudy: true,
  },
  {
    link: 'buildacat',
    externalLink: 'http://build-a-cat.herokuapp.com',
    image: buildacatLogo,
    header: 'find the cutest cat. ever.',
    description: 'Web application that shows you pictures of cats that match the facial features you specify'
  },
  {
    link: 'grape',
    externalLink: 'http://grapeapp.herokuapp.com/',
    image: grapeLogo,
    header: 'do something nice today.',
    description: 'Mobile web application designed to encourage users to track personal acts of kindness',
    caseStudy: true,
  },
  {
    link: 'brewngo',
    externalLink: 'http://bruvida.com/',
    image: brewngoLogo,
    header: 'coffee & tea. on the go.',
    description: 'Innovative product for an automatic and portable coffee & tea brewer',
    caseStudy: true,
  },
  {
    link: 'clickndig',
    externalLink: 'https://clickndig-potato.herokuapp.com/',
    image: clickndigLogo,
    header: 'never lose your possessions.',
    description: 'High fidelity e-commerce prototype for a popular item-finding product',
  },
]

function Projects() {
  const projectCards = projects.map(project => {
    return (
      <ProjectCard 
        link={project.link}
        externalLink={project.externalLink}
        image={project.image}
        header={project.header}
        description={project.description}
        caseStudy={project.caseStudy}
      />
    )
  })

  return (
    <section className='portfolio'>
      <div className='container'>
        <hr/>
        <div className='row media__container'>
          {projectCards}
        </div>
      </div>
    </section>
  )
}

export default Projects
