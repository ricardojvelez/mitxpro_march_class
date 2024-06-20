import React, { useState } from "react";

const UseStateWithButton = () => {
  const [count, setCount] = useState(0);

  const onHandleIncrement = () => {
    setCount(count + 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onHandleIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UseStateWithButton;
