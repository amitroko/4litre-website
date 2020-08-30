import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Listen from './Listen.js';
import Wear from './Wear.js';
import Logo from './4logo.PNG';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <img className="logo" src={Logo}/>
        <Switch>
            <Route path="/listen" component={Listen}/>
            <Route path="/wear" component={Wear}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
