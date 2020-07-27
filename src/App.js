import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/ianbonafede/" component={Home}/>
      </Switch>
    </Router>
  );
  


}



export default App;
