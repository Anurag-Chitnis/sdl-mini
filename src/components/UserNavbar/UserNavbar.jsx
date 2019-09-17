import React from 'react';
import './UserNavbar.scss';

export default class UserNavbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Search</div>
          <div className="nav-item">History</div>
          <div className="nav-item">Logout</div>
        </div>
      </div>
    );
  }
}
