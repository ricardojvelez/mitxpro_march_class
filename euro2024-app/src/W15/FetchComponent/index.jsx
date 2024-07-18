import React, { useState, useEffect } from "react";
import FetchComponentSinglePokemon from "../FetchComponentSinglePokemon";

export const FetchComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (response.ok) {
          const data = await response.json();
          setPokemonList(data.results);
        } else {
          throw new Error("Error fetching data");
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ marginLeft: "30px", maxWidth: "50%" }}>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <FetchComponentSinglePokemon name={pokemon.name} />
        ))}
      </ul>
    </div>
  );
};

//<FetchComponentSinglePokemon name={pokemon.name} />
