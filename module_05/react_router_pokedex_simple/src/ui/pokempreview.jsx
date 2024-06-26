import { Link } from "react-router-dom";
export default function PokemonPreview({ pokemon }) {
  return (
    <div className="h-22 m-10 w-40 rounded bg-blue-950 p-10 text-center text-white">
      <Link to={`pokemon/${pokemon.name}`}>
        <p>{pokemon.name}</p>
      </Link>
    </div>
  );
}
