import React, { Component } from 'react';
import '../styles/EmailRow.css';

export default class EmailRow extends Component {
  constructor(props) {
    super(props);
    this.toggleIsRead = this.toggleIsRead.bind(this);
  }

  getClassName() {
    let className = 'email-row';
    let emailId = this.props.email.id;
    if (this.props.isRead[emailId]) {
      className += ' email-is-read';
    }
    return className;
  }

  toggleIsRead() {
    let emailId = this.props.email.id;

    if (this.props.isRead[emailId]) {
      this.props.markUnread(emailId);
    } else {
      this.props.markRead(emailId);
    }
    return true;
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <div className="email-toggle-is-read">
          <button onClick={this.toggleIsRead}>Is Read</button>
        </div>
        <div className="email-date">{this.props.email.date}</div>
        <div className="email-from">{this.props.email.email}</div>
        <div className="email-subject">{this.props.email.subject}</div>
        <div className="email-body">{this.props.email.body}</div>
      </div>
    );
  }
}
