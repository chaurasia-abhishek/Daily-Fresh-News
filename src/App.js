import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newsitems from './components/Newsitems'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
export default function App() {
  const [country, setcountry] = useState('in');
  const [postperpage, setpostperpage] = useState(9);
  const [mode, setmode] = useState('dark');

  const changemode = async () => {
    setmode(mode === 'dark' ? 'light' : 'dark')
    document.body.style.backgroundColor = `${mode === 'dark' ? 'rgb(75 57 57)' : 'rgb(236 233 242)'}`;
  }

  var variables = {
    apikey: "38ab41574cec466ba1d539e39e99b95f", //enter api key here from newsapi.org
    language: 'en',
    mode: mode,
    postperpage: postperpage,
    country: country,
    changevar: (object) => {
      eval(`${object.key}('${object.value}')`)
    }
  }
  document.body.style.backgroundColor = `${mode === 'dark' ? 'rgb(75 57 57)' : 'rgb(236 233 242)'}`;

  return (
    <>
      <BrowserRouter>
        <Navbar changemode={changemode} mode={variables.mode} />
        <Switch>
          <Route exact path='/about'><About mode={variables.mode} /></Route>

          <Route exact path='/'><Newsitems category='general' var={variables} /></Route>

          <Route exact path='/home' key='home'><Newsitems category='general' var={variables} /></Route>

          <Route exact path='/sports' key='sports'><Newsitems category='sports' var={variables} /></Route>

          <Route exact path='/general' key='general'><Newsitems category='general' var={variables} /></Route>

          <Route exact path='/health' key='health'><Newsitems category='health' var={variables} /></Route>

          <Route exact path='/science' key='science'><Newsitems category='science' var={variables} /></Route>

          <Route exact path='/technology' key='technology'><Newsitems category='technology' var={variables} /></Route>

          <Route exact path='/entertainment' key='entertainment'><Newsitems category='entertainment' var={variables} /></Route>

          <Route exact path='/business' key='business'><Newsitems category='business' var={variables} /></Route>

        </Switch>

      </BrowserRouter>
    </>

  )


}
