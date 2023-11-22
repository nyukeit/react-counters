import './Counter.css';

import React, { useState } from "react";

const Counter = ({ step = 1, initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const handleClickPlus = () => setCount(count + step);
  const handleClickMinus = () => setCount(count - step);

  return (
    <div className='counter-display'>
      <p>{count}</p>
      <button className="button" onClick={handleClickMinus}>-{step} </button>
      <button className="button" onClick={handleClickPlus}>+{step}</button>
    </div>
  );
};

export default Counter;
