import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsitems from './components/Newsitems'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
export default class App extends Component {
  changevar = async (object) => {
    this.setState({ [object.value]: object.key });
  }
  changemode = async() => {
    await this.setState({ mode: this.state.mode === 'dark' ? 'light' : 'dark' })
    document.body.style.backgroundColor = `${this.state.mode === 'dark' ? 'rgb(75 57 57)' : 'rgb(236 233 242)'}`;
  }
  constructor() {
    super();
    this.state = {
      apikey: "e7777f58d38843bfb723d19592c4dd05",
      language: 'en',
      mode: 'dark',
      scrollTop:'',
      postperpage: '15',
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
            <Route exact path='/about'><About mode={this.state.mode}/></Route>

            <Route exact path='/'><Newsitems category='general' var={this.state} changevar={this.changevar} /></Route>

            <Route exact path='/home' key='home'><Newsitems category='general' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/sports' key='sports'><Newsitems category='sports' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/general' key='general'><Newsitems category='general' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/health' key='health'><Newsitems category='health' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/science' key='science'><Newsitems category='science' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/technology' key='technology'><Newsitems category='technology' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/entertainment' key='entertainment'><Newsitems category='entertainment' var={this.state} changevar={this.changevar}  /></Route>

            <Route exact path='/business' key='business'><Newsitems category='business' var={this.state} changevar={this.changevar}  /></Route>

          </Switch>
          
        </BrowserRouter>
      </>

    )

  }
}
