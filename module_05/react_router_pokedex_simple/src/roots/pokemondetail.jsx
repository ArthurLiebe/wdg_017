import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();
  console.log("pokemon", pokemon);

  useEffect(() => {
    fetchPokemon();
    async function fetchPokemon() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, [name]);
  return (
    <div className="h-screen bg-red-300 text-center">
      <div className="h-2/3">
        <p className="text-6xl">{pokemon.name}</p>
        <img
          className="mx-auto"
          src={pokemon.sprites?.other["dream_world"]["front_default"]}
          alt=""
        />
        <button className="mt-10" onClick={() => navigate(-1)}>
          Go Back
        </button>{" "}
      </div>
    </div>
  );
}
