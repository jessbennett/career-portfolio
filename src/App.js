import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <CssBaseline />
            <Navigation>
              <Route exact path='/About' component={About} />
            </Navigation>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
