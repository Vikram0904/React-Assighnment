import React from 'react';
import './style.css';
import Vikram from './Vikram.js';

export default function App() {
  let array = [
    'Game Of Thrones',
    'Breaking Bad',
    'Dark',
    'Sex Education',
    'Stranger Things',
  ];
  return (
    <div>
      <h1>Assighnment</h1>
      <p>My Favourite Web Series</p>
      <Vikram movie={array} />
    </div>
  );
}
