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
      isRead: {},
      isSelected: {}
    };

    this.markRead = this.markRead.bind(this);
    this.markUnread = this.markUnread.bind(this);
    this.select = this.select.bind(this);
    this.deSelect = this.deSelect.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deselectAll = this.deselectAll.bind(this);

    this.markSelectedRead = this.markSelectedRead.bind(this);
    this.markSelectedUnread = this.markSelectedUnread.bind(this);
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

  select(emailId) {
    let isSelected = { ...this.state.isSelected };
    isSelected[emailId] = true;
    this.setState({ isSelected });
  }

  deSelect(emailId) {
    let isSelected = { ...this.state.isSelected };
    isSelected[emailId] = false;
    this.setState({ isSelected });
  }

  markSelectedRead() {
    let isRead = { ...this.state.isRead };
    for (let key in this.state.isSelected) {
      if (this.state.isSelected[key]) {
        isRead[key] = true;
      }
    }
    this.setState({ isRead });
  }

  markSelectedUnread() {
    let isRead = { ...this.state.isRead };
    for (let key in this.state.isSelected) {
      if (this.state.isSelected[key]) {
        isRead[key] = false;
      }
    }
    this.setState({ isRead });
  }

  selectAll() {
    let isSelected = {};
    for (let email of this.state.emails) {
      isSelected[email.id] = true;
    }
    this.setState({ isSelected });
  }

  deselectAll() {
    this.setState({ isSelected: {} });
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
                  isSelected={this.state.isSelected}
                  markRead={this.markRead}
                  markUnread={this.markUnread}
                  markSelectedRead={this.markSelectedRead}
                  markSelectedUnread={this.markSelectedUnread}
                  select={this.select}
                  deSelect={this.deSelect}
                  selectAll={this.selectAll}
                  deselectAll={this.deselectAll}
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
