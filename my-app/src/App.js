import React from 'react';
import Sidebar from './Components/sidebar/Sidebar';
import Header from './Components/header/Header';

import './App.css';
import './Form.css';
import'./helper.css';
import './Components/Components.css';
import ServiceForm from './Components/form/ServiceForm';
import { LeftArrow } from './Components/Icons';

export default function App() {
  return (
   
    <div className="app">
        <div className="sidebar-wrapper">
    <Sidebar />
    <div className="floating-icon">
      <LeftArrow />
    </div>
  </div>
      <div className="main">
        <Header />
        <div className="content">
          <ServiceForm/>
        </div>
      </div>
    </div>
  );
}