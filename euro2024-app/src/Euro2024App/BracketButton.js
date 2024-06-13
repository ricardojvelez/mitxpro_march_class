import React from "react";

const BracketButton = ({ team, onClick }) => {
  return <button onClick={onClick}>{team.name}</button>;
};

export default BracketButton;
