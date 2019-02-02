import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inbox from './Inbox';
import EmailRead from './EmailRead';

import EMAILS from '../MOCK_DATA.json';

import '../styles/App.css';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: EMAILS
    };
  }
  render() {
    return (
      <div className="app-container">
        <Router>
          <React.Fragment>
            <Nav />
            <Route
              exact
              path="/"
              component={() => <Inbox emails={this.state.emails} />}
            />
            <Route
              exact
              path="/read/:id"
              component={() => <EmailRead emails={this.state.emails} />}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

// <Route exact path="/read/:id" component={EmailRead} />
