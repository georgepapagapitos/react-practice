import { useState } from 'react';
import useCounter from '../../hooks/useCounter';

export default function Counter() {
  const [toggle, setToggle] = useState(false);
  const counter = useCounter();

  const onClickFunction = () => {
    counter.setCount((prevState) => prevState + Math.floor(Math.random() * 10));
    counter.setCount((prevState) => prevState + Math.floor(Math.random() * 5));
  };

  return (
    <>
      <h2>count = {counter.count}</h2>
      <button onClick={counter.increase}>add one</button>
      <button onClick={onClickFunction}>add a few</button>
      <button onClick={counter.decrease}>remove one</button>
      <button onClick={counter.zero}>zero</button>
      <p>{toggle ? 'ON' : 'OFF'}</p>
      <button onClick={() => setToggle((prevState) => !prevState)}>toggle</button>
    </>
  );
};