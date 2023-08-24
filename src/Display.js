import React from 'react';
import './style.css';

export default function Display() {
  const date = new Date();
  let display = '';
  if (date.getHours() >= 5 && date.getHours() <= 11 && date.getMinutes <= 59) {
    display = 'Good Morning';
  } else if (date.getHours() >= 12 && date.getHours() <= 15) {
    display = 'Good Afternoon';
  } else if (
    date.getHours() >= 15 &&
    date.getMinutes() <= 1 &&
    date.getHours() <= 19
  ) {
    display = 'Good Evening';
  } else {
    display = 'Good Night';
  }
  return (
    <div>
      <h2>{display}</h2>
    </div>
  );
}
