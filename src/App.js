import React, { useState } from "react";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import Yelp from "./utils/Yelp";

import "./App.css";

function App() {
  const [businesses, setBusinesses] = useState([]); // 🔹 Garantimos um array vazio inicial

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy)
      .then((results) => {
        setBusinesses(results || []); // 🔹 Evita erros caso `results` seja `undefined`
      })
      .catch((error) => {
        console.error("Erro ao buscar no Yelp:", error);
        setBusinesses([]); // 🔹 Garante que não quebre a renderização
      });
  };

  return (
    <div className="App">
      <h1 className="app-title">Ravenous</h1>
      <SearchBar onSearch={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
