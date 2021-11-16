import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:id" component={Movie} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
