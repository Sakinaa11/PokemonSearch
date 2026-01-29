import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400 text-black",
  bug: "bg-lime-500",
  poison: "bg-purple-500",
  flying: "bg-sky-400",
  normal: "bg-gray-400",
};

export default function PokemonCard({ pokemon }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFav(favs.includes(pokemon.id));
  }, [pokemon.id]);

  const toggleFav = (e) => {
    e.preventDefault();
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favs.includes(pokemon.id)) {
      favs = favs.filter((id) => id !== pokemon.id);
      setFav(false);
    } else {
      favs.push(pokemon.id);
      setFav(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xl hover:scale-105 transition">
        {/* Favorite */}
        <button
          onClick={toggleFav}
          className="absolute top-3 right-3 text-2xl"
        >
          {fav ? "❤️" : "🤍"}
        </button>

        {/* Image */}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-28 -mt-8"
        />

        {/* Name */}
        <h3 className="capitalize font-bold text-center mt-2 dark:text-white">
          {pokemon.name}
        </h3>

        {/* Types */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`px-3 py-1 rounded-full text-xs text-white ${
                typeColors[type] || "bg-gray-500"
              }`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
