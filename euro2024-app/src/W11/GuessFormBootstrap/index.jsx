import React, { useState } from 'react';

export const GuessFormBootstrap = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleChange = (event) => {
    setGuess(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onGuess(parseInt(guess, 10));
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group ">
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter your guess"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

