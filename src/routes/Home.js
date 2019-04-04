import React, { useEffect } from 'react'
import Header from 'components/Header'
import Projects from 'containers/Projects'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <React.Fragment>
      <Header />
      <Projects />
    </React.Fragment>
  )
}

export default Home
