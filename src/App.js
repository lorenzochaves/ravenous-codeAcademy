import React, { useState } from "react";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const businesses = [
  {
    id: 1,
    imageSrc: "https://www.minhareceita.com.br/app/uploads/2022/03/estrogonofe-de-frango-seara-2.jpg",
    name: "Best Pizza",
    address: "123 Pizza St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 2,
    imageSrc: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/684a75a7a4b7b4631aa0d054bba6eaef.jpg",
    name: "Sushi House",
    address: "456 Sushi Rd",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    category: "Japanese",
    rating: 4.7,
    reviewCount: 120,
  },
  {
    id: 3,
    imageSrc: "https://donanena.com.br/wp-content/uploads/2023/07/lentilha-site.jpg",
    name: "Taco Fiesta",
    address: "789 Fiesta Blvd",
    city: "Austin",
    state: "TX",
    zipCode: "73301",
    category: "Mexican",
    rating: 4.2,
    reviewCount: 75,
  }
];

const App = () => {
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    // In the future, this function will make an API request.
    setFilteredBusinesses(businesses); // Placeholder logic
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearch={searchYelp} />
      <BusinessList businesses={filteredBusinesses} />
    </div>
  );
};

export default App;
