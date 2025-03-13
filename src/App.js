import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

// Mock data simulating API results
const mockBusinesses = [
  {
    id: 1,
    imageSrc: "https://www.minhareceita.com.br/app/uploads/2022/03/estrogonofe-de-frango-seara-2.jpg",
    name: "Joe's Pizza",
    address: "123 Main St",
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
    name: "Burger Haven",
    address: "456 Elm St",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90012",
    category: "Fast Food",
    rating: 4.2,
    reviewCount: 120,
  },
  {
    id: 3,
    imageSrc: "https://donanena.com.br/wp-content/uploads/2023/07/lentilha-site.jpg",
    name: "Sushi World",
    address: "789 Oak St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    category: "Japanese",
    rating: 4.8,
    reviewCount: 150,
  },
];

function App() {
  const [businesses, setBusinesses] = useState(mockBusinesses); // Store business data in state

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with: ${term}, ${location}, ${sortBy}`);
    // This will later be updated to fetch businesses from the Yelp API
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearch={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
