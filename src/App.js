import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Switch>
        <Route path = "/" component = {Home} exact />
        <Route path = "/service" component = {Services} exact/>
        <Route path = "/about" component = {About} exact />
        <Route path = "/contact" component = {Contact} exact />
        <Redirect to = "/" />
      </Switch>
    </>
  );
}

export default App;
