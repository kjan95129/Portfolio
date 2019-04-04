import React, { useEffect } from 'react'
import Header from 'components/Header'
import Projects from 'containers/Projects'
import Contact from 'components/Contact'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <React.Fragment>
      <Header />
      <Projects />
      <Contact />
    </React.Fragment>
  )
}

export default Home
