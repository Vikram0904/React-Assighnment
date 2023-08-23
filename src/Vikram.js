import React from 'react';
import './style.css';
import Time from './Time.js';

export default function Vikram(props) {
  return (
    <>
      <ul>
        {props.movie.map((movie, index) => {
          return <li>{movie}</li>;
        })}
      </ul>
      <Time />
    </>
  );
}
