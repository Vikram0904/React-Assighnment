import React from 'react';
import './style.css';
import Display from './Display';

export default function Time() {
  const date = new Date();

  return (
    <>
      <h2>{date.toString()}</h2>
      <Display />
    </>
  );
}
