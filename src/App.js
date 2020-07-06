import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Switch>
            {/* <Route exact path='/' component={LinkList} /> */}
            <Route exact path='/' component={Sidebar} />
            {/* <Route exact path='/login' component={Login} /> */}
            {/* <Route exact path='/search' component={Search} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
