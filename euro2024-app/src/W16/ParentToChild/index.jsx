import React, { useState, useEffect } from "react";

export const ParentToChild = () => {
  const [count, setCount] = useState(0);

  const onHandleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Rendering Parent...");
  });

  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={onHandleIncrement}>Increment Count</button>
      <Child count={count} />
    </div>
  );
};

export const Child = ({ count }) => {
  useEffect(() => {
    console.log("Rendering Child...");
  });

  // This child component will receive the "count" prop from the parent!
  return (
    <div>
      <h3>Child Component</h3>
      <p>Received count from Parent: {count}</p>
    </div>
  );
};
