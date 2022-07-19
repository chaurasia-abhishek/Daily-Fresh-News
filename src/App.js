import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsitems from './components/Newsitems'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'><Newsitems apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/home' key='home'><Newsitems apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/sports' key='sports'><Newsitems category='sports' apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/general' key='general'><Newsitems apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/health' key='health'><Newsitems category='health' apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/science' key='science'><Newsitems category='science' apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/technology' key='technology'><Newsitems category='technology' apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/entertainment' key='entertainment'><Newsitems category='entertainment' apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

            <Route exact path='/business' key='business'><Newsitems category='business' apikey='e7777f58d38843bfb723d19592c4dd05' /></Route>

          </Switch>
        </BrowserRouter>
      </>

    )

  }
}
