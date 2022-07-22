import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsitems from './components/Newsitems'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
export default class App extends Component {
  changevar = async (object) => {
    this.setState({ [object.value]: object.key });
  }
  changemode = async () => {
    await this.setState({ mode: this.state.mode === 'dark' ? 'light' : 'dark' })
    document.body.style.backgroundColor = `${this.state.mode === 'dark' ? 'rgb(75 57 57)' : 'rgb(236 233 242)'}`;
  }
  constructor() {
    super();
    this.state = {
      apikey: "Sjb8b49vIQsCeGPOx-IDpbP_bPSFLypxNlKqI3fWzZI", //enter api key here from newscatcherapi.com
      language: 'en',
      mode: 'dark',
      scrollTop: '',
      postperpage: '21',
      country: ['in']
    }

    document.body.style.backgroundColor = `${this.state.mode === 'dark' ? 'rgb(75 57 57)' : 'rgb(236 233 242)'}`;
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changemode={this.changemode} mode={this.state.mode} />
          <Switch>
            <Route exact path='/about'><About mode={this.state.mode} /></Route>

            <Route exact path='/'><Newsitems category='news' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/home' key='home'><Newsitems category='news' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/news' key='news'><Newsitems category='news' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/sport' key='sport'><Newsitems category='sport' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/tech' key='tech'><Newsitems category='tech' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/world' key='world'><Newsitems category='world' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/finance' key='finance'><Newsitems category='finance' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/politics' key='politics'><Newsitems category='politics' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/business' key='business'><Newsitems category='business' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/economics' key='economics'><Newsitems category='economics' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/entertainment' key='entertainment'><Newsitems category='entertainment' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/beauty' key='beauty'><Newsitems category='beauty' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/travel' key='travel'><Newsitems category='travel' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/music' key='music'><Newsitems category='music' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/food' key='food'><Newsitems category='food' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/science' key='science'><Newsitems category='science' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/gaming' key='gaming'><Newsitems category='gaming' var={this.state} changevar={this.changevar} /></Route>
            <Route exact path='/energy' key='energy'><Newsitems category='energy' var={this.state} changevar={this.changevar} /></Route>

          </Switch>

        </BrowserRouter>
      </>

    )

  }
}
