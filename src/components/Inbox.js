import React, { Component } from 'react';
import EmailRow from './EmailRow.js';

export default class Inbox extends Component {
  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have {this.props.emails.length} emails</p>
        <p>
          <button onClick={this.props.markSelectedRead}>mark read</button>
          <button onClick={this.props.markSelectedUnread}>mark unread</button>
          <button onClick={this.props.selectAll}>select all</button>
          <button onClick={this.props.deselectAll}>deselect all</button>
        </p>
        <div id="all-emails">
          {this.props.emails.map((email, index) => {
            return (
              <EmailRow
                key={index}
                email={email}
                isRead={this.props.isRead}
                isSelected={this.props.isSelected}
                markRead={this.props.markRead}
                markUnread={this.props.markUnread}
                select={this.props.select}
                deSelect={this.props.deSelect}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
