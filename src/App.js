import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Luxury from './components/pages/Luxury';
import Adventure from './components/pages/Adventure';
import SignUp from './components/pages/SignUp';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/luxury" component={Luxury}></Route>
          <Route exact path="/adventure" component={Adventure}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>      
    </>
  );
}

export default App;
