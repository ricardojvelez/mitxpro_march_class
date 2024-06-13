import React, { useState } from "react";
import { GuessFormBootstrap } from "../GuessFormBootstrap";

export const GameBootstrap = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState("");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 101); // Generates random number between 0 and 100
  }

  const handleGuess = (guess) => {
    if (guess === randomNumber) {
      setMessage("Congratulations! You guessed the correct number!");
    } else if (guess < randomNumber) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }
  };

  const handleResetGame = () => {
    setRandomNumber(generateRandomNumber());
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light p-4 rounded shadow">
          <h1 className="text-center text-primary">Guess the Number Game</h1>
          <div className="text-center mb-4">
            <p className="lead">{message}</p>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <GuessFormBootstrap onGuess={handleGuess} />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mr-2" onClick={handleResetGame}>
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

