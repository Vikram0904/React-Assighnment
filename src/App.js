import React from 'react';
import './style.css';
import Vikram from './Vikram.js';
import React, { useState } from 'react';

export default function App() {
  let [name, setName] = useState('Lists:');
  let [tamil, setTamil] = useState('Something');
  let array = [
    'Game Of Thrones',
    'Breaking Bad',
    'Dark',
    'Sex Education',
    'Stranger Things',
  ];
  const changeName = (lname) => {
    name = lname + ' ' + name;
    setName(name);
    alert(name);
  };
  const newSeries = () => {
    setTamil(tamil);
  };
  return (
    <>
      <div className="navbar">
        <button>English</button>
        <button>Tamil</button>
        <button>Telugu</button>
        <button>Malayalam</button>
        <button>Hindhi</button>
      </div>
      <div>
        <h1>Assighnment</h1>
        <p>My Favourite Web Series</p>
        <p>{name}</p>
        <Vikram movie={array} />
        <button
          onClick={() => changeName('These Are My Favourite')}
          className="btn1"
        >
          Done
        </button>
      </div>
    </>
  );
}
