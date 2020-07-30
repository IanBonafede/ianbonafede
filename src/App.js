import React from 'react';
import './App.css';
import Home from "./Home"
import Bio from "./Bio"
import Projects from "./Projects"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/ianbonafede/" component={Home}/>
          <Route path="/ianbonafede/bio" component={Bio}/>
          <Route path="/ianbonafede/projects" component={Projects}/>
        </Switch>
      </Router>

    </div>
    
  );
  


}



export default App;
