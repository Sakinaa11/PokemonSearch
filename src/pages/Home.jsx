import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import SkeletonCard from "../components/SkeletonCard";

const LIMIT = 12;

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showFavs, setShowFavs] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      try {
        const offset = (page - 1) * LIMIT;
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
        );
        const data = await res.json();

        const details = await Promise.all(
          data.results.map((p) => fetch(p.url).then((r) => r.json()))
        );

        setPokemon(
          details.map((d) => ({
            id: d.id,
            name: d.name,
            image:
              d.sprites.other?.home?.front_default ||
              d.sprites.front_default ||
              "",
            types: d.types.map((t) => t.type.name),
          }))
        );
      } catch (err) {
        console.error("Error fetching Pokémon:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [page]);

  // 🔹 Favorites from localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const filteredPokemon = pokemon.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = type === "" || p.types.includes(type);

    const matchesFav = !showFavs || favorites.includes(p.id);

    return matchesSearch && matchesType && matchesFav;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mt-4 items-center">
        {/* Type Filter */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 rounded-xl bg-white dark:bg-slate-800 dark:text-white"
        >
          <option value="">All Types</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="bug">Bug</option>
          <option value="poison">Poison</option>
        </select>

        {/* Favorites Toggle */}
        <button
          onClick={() => setShowFavs((prev) => !prev)}
          className={`px-5 py-3 rounded-xl font-semibold transition
            ${
              showFavs
                ? "bg-pink-600 text-white"
                : "bg-slate-200 dark:bg-slate-700 dark:text-white"
            }`}
        >
          {showFavs ? "❤️ Showing Favorites" : "🤍 Show Favorites"}
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {loading
          ? Array.from({ length: LIMIT }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : filteredPokemon.length > 0
          ? filteredPokemon.map((p) => (
              <PokemonCard key={p.id} pokemon={p} />
            ))
          : (
            <p className="col-span-full text-center text-slate-500 dark:text-slate-300">
              No Pokémon found 💔
            </p>
          )}
      </div>

      {/* Pagination (disabled when showing favorites) */}
      {!showFavs && (
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            ⬅ Previous
          </button>

          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}
