import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          image:
            data.sprites.other.home.front_default ||
            data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map((t) => t.type.name),
          abilities: data.abilities.map((a) => a.ability.name),
          stats: data.stats.map((s) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        });
      });
  }, [id]);

  if (!pokemon)
    return (
      <p className="text-center mt-10 text-white">Loading...</p>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-4 text-indigo-400 hover:underline"
      >
        ⬅ Back
      </Link>

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6">
        {/* Image */}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-48"
        />

        {/* Name */}
        <h2 className="text-center capitalize text-3xl font-extrabold mt-4 text-slate-800 dark:text-white">
          {pokemon.name}
        </h2>

        {/* Types */}
        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`px-3 py-1 rounded-full text-sm text-white ${
                typeColors[type] || "bg-gray-500"
              }`}
            >
              {type}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-center">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Height
            </p>
            <p className="font-bold">{pokemon.height}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Weight
            </p>
            <p className="font-bold">{pokemon.weight}</p>
          </div>
        </div>

        {/* Abilities */}
        <div className="mt-6">
          <h3 className="font-bold text-lg text-slate-700 dark:text-white">
            Abilities
          </h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {pokemon.abilities.map((a) => (
              <span
                key={a}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-600 text-indigo-700 dark:text-white rounded-full text-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 space-y-3">
          <h3 className="font-bold text-lg text-slate-700 dark:text-white">
            Stats
          </h3>

          {pokemon.stats.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="capitalize">{s.name}</span>
                <span>{s.value}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div
                  className="bg-indigo-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${s.value / 2}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
