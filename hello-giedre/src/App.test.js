import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Polygon from './Modulis/Modulis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('calculates area correctly', () => {
  expect(new Polygon().calcArea()).toEqual(9);
  });