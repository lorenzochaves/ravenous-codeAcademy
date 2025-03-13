import React from "react";
import Business from "./business";
import "./BusinessList.css";

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
