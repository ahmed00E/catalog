 import React, { Component } from 'react'
 import { BrowserRouter, Switch, Route } from 'react-router-dom'
 import Home from './pages/Home'
//  import NotFound from './pages/NotFound'
 import Film from './pages/Film'
 import movies from './movies.json';



  class App extends Component {
   
   render() {
     return (
      
          <BrowserRouter>
           <div>
            <Switch>
              <Route exact path="/" render={(props) => 
                <Home {...props} movies={movies} />} 
              />
              <Route path="/:id" render={(props) => 
                <Film {...props} movies={movies} />}
              />

              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
            </div>
          </BrowserRouter>
       
     )
   }
 }
 export default App
 
