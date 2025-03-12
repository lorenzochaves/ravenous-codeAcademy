import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import businesses from "./businesses"; // Import businesses data

function App() {
  const [businessList, setBusinessList] = useState(businesses); // Set businesses data

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with: ${term}, ${location}, ${sortBy}`);
    // You can update businessList based on API data here
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearch={searchYelp} />
      <BusinessList businesses={businessList} />
    </div>
  );
}

export default App;
