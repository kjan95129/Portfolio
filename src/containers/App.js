import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from '../routes/Home'
import Grape from '../routes/Grape'
import Violet from '../routes/Violet'
import Brewngo from '../routes/Brewngo'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/grape/" component={Grape} />
        <Route path="/violet/" component={Violet} />
        <Route path="/brewngo/" component={Brewngo} />
      </Switch>
    </HashRouter>
  )
}

export default App
