import React, { useState, useEffect } from "react";

export const ChildToParent = () => {
  const [childData, setChildData] = useState("");

  const handleChildDataChange = (newData) => {
    setChildData(newData);
  };

  useEffect(() => {
    console.log("Rendering Parent...");
  });

  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>Parent Component</h2>
      <p>Data from Child: {childData}</p>
      <Child onDataChange={handleChildDataChange} />
    </div>
  );
};

export const Child = ({ onDataChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onDataChange(newValue);
  };

  useEffect(() => {
    console.log("Rendering Child...");
  });

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};
