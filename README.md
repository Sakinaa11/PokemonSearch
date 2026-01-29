# ⚡ Pokémon Explorer App

A modern, responsive **Pokémon Explorer** web application built with **React**, **Vite**, and **Tailwind CSS**.  
This app allows users to browse Pokémon, search and filter them by type, view detailed Pokémon information, manage favorites, and switch between dark and light themes.

---

## 🚀 Live Demo

👉 **Live Website:**  
https://pokemon-search-qc4n.vercel.app/

👉 **GitHub Repository:**  
https://github.com/Sakinaa11/PokemonSearch

---

## 🧩 Features

- 🔍 **Search Pokémon** by name  
- 🏷️ **Filter Pokémon by type**  
- ❤️ **Favorite Pokémon system** (stored in localStorage)  
- ⭐ **Show Favorites toggle**  
- 📄 **Pagination (Next / Previous)**  
- 🧬 **Pokémon detail page**  
  - Stats with animated bars  
  - Abilities  
  - Evolution chain  
- 🌗 **Dark / Light mode** (theme persists after refresh)  
- 🖼 **Skeleton loaders** for smooth loading experience  
- 📱 **Fully responsive design**

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **Vite** (Fast build & dev server)
- **Tailwind CSS** (Modern utility-first styling)
- **React Router DOM** (Routing & dynamic pages)
- **PokéAPI** (Public Pokémon data API)

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── SearchBar.jsx
│ ├── PokemonCard.jsx
│ ├── SkeletonCard.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── PokemonDetail.jsx
│
├── App.jsx
├── main.jsx
├── index.css



---

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/Sakinaa11/PokemonSearch.git
cd PokemonSearch
npm install
npm run dev
http://localhost:5173
API Used

PokéAPI

https://pokeapi.co/api/v2/pokemon

Pokémon species & evolution chain endpoints

💾 Local Storage Usage

Favorite Pokémon IDs

Theme preference (Dark / Light mode)

This ensures user preferences persist across refreshes and deployments.

🧠 Key Learnings

Managing async API calls using async/await

Handling pagination using API offsets

State management with React Hooks

Persisting data using localStorage

Fixing production-only issues after deployment

Responsive UI design with Tailwind CSS

Implementing real-world features like favorites & filters



Favorites view

📌 Future Improvements

⭐ Dedicated Favorites page

🔄 Infinite scrolling

🧪 Error boundaries

🧬 Evolution images

🔍 Multi-type filtering

👩‍💻 Author

Sakina Shaikh
Frontend Developer | React Enthusiast

GitHub: https://github.com/Sakinaa11

Live Project: https://pokemon-search-qc4n.vercel.app/
