import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserNavbar from './components/UserNavbar/UserNavbar';
import DashboardMain from './components/DashboardMain/DashboardMain';

function App() {
  return (
    <div className="App">
      <UserNavbar></UserNavbar>
      <DashboardMain />
    </div>
  );
}

export default App;
