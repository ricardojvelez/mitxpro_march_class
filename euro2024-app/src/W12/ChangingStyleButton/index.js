import React, { useState } from "react";
import "./ChangingStyleButton.css"; // Import the CSS file

const ChangingStyleButton = () => {
  const [buttonColor, setButtonColor] = useState("");

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const onHandleClick = () => {
    const randomColor = generateRandomColor();
    setButtonColor(randomColor);
    alert(`My new color is ${randomColor}`);
  };

  return (
    <button
      className="random-color-button"
      style={{ backgroundColor: buttonColor }}
      onClick={onHandleClick}
    >
      Change my color
    </button>
  );
};

export default ChangingStyleButton;
