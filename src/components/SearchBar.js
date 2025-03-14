import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");       // Search term input
  const [location, setLocation] = useState(""); // Location input
  const [sortBy, setSortBy] = useState("best_match"); // Sorting option

  const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  // Highlight active sort option
  const getSortClass = (option) => (sortBy === option ? "active" : "");

  // Set sorting option
  const handleSortChange = (option) => setSortBy(option);

  // Handle input changes
  const handleTermChange = (event) => setTerm(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);

  // Simulated search functionality
// Simulated search functionality
  const handleSearch = () => {
  alert(`Searching Yelp with:\nTerm: ${term}\nLocation: ${location}\nSort By: ${sortBy}`);
  onSearch(term, location, sortBy);
  };


  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        {Object.keys(sortOptions).map((option) => (
          <button
            key={sortOptions[option]}
            className={getSortClass(sortOptions[option])}
            onClick={() => handleSortChange(sortOptions[option])}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="SearchBar-fields">
        <input
          type="text"
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          type="text"
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>

      <button className="SearchBar-submit" onClick={handleSearch}>
        Let's Go
      </button>
    </div>
  );
};

export default SearchBar;
