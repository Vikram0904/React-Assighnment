import './style.css';
import Display from './Display';

export default function Time() {
  const date = new Date();

  return (
    <>
      <h2>{date}</h2>
      <Display />
    </>
  );
}
