import React from "react";
import Business from "./business.js";
import businesses from "../businesses"; // Import the hardcoded list
import "./BusinessList.css"; // Create this file for styling

const BusinessList = () => {
  return (
    <div className="business-list">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
