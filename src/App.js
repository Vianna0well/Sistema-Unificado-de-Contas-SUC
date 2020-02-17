import React from 'react';
import './App.css';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from './templates/menu'

function App() {
  return (
    <div id="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
