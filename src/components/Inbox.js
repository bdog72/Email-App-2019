import React, { Component } from 'react';
import EmailRow from './EmailRow.js';
import { Link } from 'react-router-dom';

export default class Inbox extends Component {
  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have {this.props.emails.length} emails</p>
        <div id="all-emails">
          {this.props.emails.map((email, index) => {
            return (
              <Link key={index} to={`/read/${email.id}`}>
                <EmailRow
                  email={email}
                  isRead={this.props.isRead}
                  markRead={this.props.markRead}
                  markUnread={this.props.markUnread}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
