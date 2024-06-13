// src/CustomButton.js
import React from "react";

const CustomButton = ({ team, onClick }) => {
  return <button onClick={onClick}>{team.name}</button>;
};

export default CustomButton;
