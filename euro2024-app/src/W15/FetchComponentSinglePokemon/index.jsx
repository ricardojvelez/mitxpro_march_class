import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FetchComponentSinglePokemon.css";
//6,14,24

const FetchComponentSinglePokemon = ({ name = "pikachu" }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="details">
      <h1 className="name">{pokemon.name}</h1>
      <img
        className="image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="info">Weight: {pokemon.weight}</p>
      <p className="info">Height: {pokemon.height}</p>
      <h2 className="info-header">Abilities:</h2>
      <ul className="abilities">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="ability">
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchComponentSinglePokemon;
