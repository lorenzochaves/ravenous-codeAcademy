import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortClass = (sortOption) => {
    return sortBy === sortOption ? "active" : "";
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(term, location, sortBy); // Function to be implemented later
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {Object.keys(sortByOptions).map((option) => (
            <li
              key={sortByOptions[option]}
              className={getSortClass(sortByOptions[option])}
              onClick={() => handleSortChange(sortByOptions[option])}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input
          type="text"
          placeholder="Search Businesses"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
