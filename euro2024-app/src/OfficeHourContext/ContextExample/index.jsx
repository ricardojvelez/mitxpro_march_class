//1. Create a context
import React, { createContext, useState, useContext } from "react";

const MyContext = createContext();

//2. Create a Provider
const Wrapper = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <MyContext.Provider value={{ count, incrementCount, resetCount }}>
      {children}
    </MyContext.Provider>
  );
};

//3. Consume the Context data
const DisplayCount = () => {
  const count = useContext(MyContext).count;
  return <div>Count: {count}</div>;
};

const IncrementButton = () => {
  const { incrementCount } = useContext(MyContext);
  return <button onClick={incrementCount}>Increment</button>;
};

const ResetButton = () => {
  const { resetCount } = useContext(MyContext);
  return <button onClick={resetCount}>Reset</button>;
};

//4. Wrap your component tree with the Provider
const ContextExample = () => {
  return (
    <Wrapper>
      <DisplayCount />
      <IncrementButton />
      <ResetButton />
    </Wrapper>
  );
};

export default ContextExample;
