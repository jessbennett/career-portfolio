import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />

          {/* <Route exact path='/' component={LinkList} /> */}
          <Route exact path='/' component={Sidebar} />
          <Route exact path='/About' component={About} />
          {/* <Route exact path='/search' component={Search} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
