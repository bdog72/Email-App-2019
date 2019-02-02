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
      emails: EMAILS,
      isRead: {
        '7ba33b80-b975-4309-b868-7af2f5cea4da': true
      }
    };
    this.markRead = this.markRead.bind(this);
    this.markUnread = this.markUnread.bind(this);
  }

  markRead(emailId) {
    let isRead = { ...this.state.isRead };
    isRead[emailId] = true;
    this.setState({ isRead });
  }

  markUnread(emailId) {
    let isRead = { ...this.state.isRead };
    isRead[emailId] = false;
    this.setState({ isRead });
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
              component={() => (
                <Inbox
                  emails={this.state.emails}
                  isRead={this.state.isRead}
                  markRead={this.markRead}
                  markUnread={this.markUnread}
                />
              )}
            />
            <Route
              exact
              path="/read/:id"
              component={() => (
                <EmailRead
                  emails={this.state.emails}
                  markRead={this.markRead}
                />
              )}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

// <Route exact path="/read/:id" component={EmailRead} />
