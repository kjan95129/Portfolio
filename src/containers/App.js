import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'routes/Home'
import Grape from 'routes/Grape'
import Violet from 'routes/Violet'
import Brewngo from 'routes/Brewngo'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/grape/" component={Grape} />
        <Route path="/violet/" component={Violet} />
        <Route path="/brewngo/" component={Brewngo} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
