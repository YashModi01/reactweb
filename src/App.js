import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path = "/" component = {Home} exact />
        <Route path = "/service" component = {Services} exact/>
        <Route path = "/about" component = {About} exact />
        <Route path = "/contact" component = {Contact} exact />
        <Redirect to = "/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
