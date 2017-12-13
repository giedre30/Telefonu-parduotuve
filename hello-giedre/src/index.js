import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Polygon from './Modulis/Modulis';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
console.log(new Polygon().calcArea());
