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

  const getSortByClass = (sortOption) =>
    sortBy === sortOption ? "active" : "";

  const handleSortByChange = (sortOption) => setSortBy(sortOption);
  const handleTermChange = (e) => setTerm(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    if (term.trim() === "" || location.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    onSearch(term, location, sortBy);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        {Object.keys(sortByOptions).map((sortOption) => (
          <span
            key={sortByOptions[sortOption]}
            className={getSortByClass(sortByOptions[sortOption])}
            onClick={() => handleSortByChange(sortByOptions[sortOption])}
          >
            {sortOption}
          </span>
        ))}
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
