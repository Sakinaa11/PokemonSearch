import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mt-8 relative max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-4 rounded-2xl 
        bg-white/70 backdrop-blur-md 
        shadow-lg border border-white/40
        focus:outline-none focus:ring-4 focus:ring-indigo-400
        transition"
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-600 text-xl">
        🔍
      </span>
    </div>
  );
}
