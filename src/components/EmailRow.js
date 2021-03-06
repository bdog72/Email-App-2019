import React, { Component } from 'react';
import '../styles/EmailRow.css';
import { Link } from 'react-router-dom';

export default class EmailRow extends Component {
  constructor(props) {
    super(props);
    this.toggleIsSelected = this.toggleIsSelected.bind(this);
  }

  getClassName() {
    let className = 'email-row';
    let emailId = this.props.email.id;
    if (this.props.isRead[emailId]) {
      className += ' email-is-read';
    }
    return className;
  }

  // toggleIsRead() {
  //   let emailId = this.props.email.id;

  //   if (this.props.isRead[emailId]) {
  //     this.props.markUnread(emailId);
  //   } else {
  //     this.props.markRead(emailId);
  //   }
  //   return true;
  // }

  toggleIsSelected() {
    let emailId = this.props.email.id;
    if (!this.props.isSelected[emailId]) {
      this.props.select(emailId);
    } else {
      this.props.deSelect(emailId);
    }
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <div className="email-toggle-is-read">
          <input
            type="checkbox"
            onChange={this.toggleIsSelected}
            checked={this.props.isSelected[this.props.email.id]}
          />
        </div>
        <Link to={`/read/${this.props.email.id}`}>
          <div className="email-date">{this.props.email.date}</div>
          <div className="email-from">{this.props.email.email}</div>
          <div className="email-subject">{this.props.email.subject}</div>
          <div className="email-body">{this.props.email.body}</div>
        </Link>
      </div>
    );
  }
}
