import React from "react";

export default function Navbar({ toggleDark, dark }) {
  return (
    <nav className="bg-indigo-600 dark:bg-black py-4 px-6 flex justify-between shadow-lg">
      <h1 className="text-white text-2xl font-extrabold">
        ⚡ Pokémon Explorer
      </h1>

      <button onClick={toggleDark} className="text-white text-xl">
        {dark ? "🌞" : "🌙"}
      </button>
    </nav>
  );
}
