import React from "react";
import Business from "./business";
import "./BusinessList.css";

function BusinessList({ businesses = [] }) { // 🔹 Garantia de que é sempre um array
  return (
    <div className="BusinessList">
      {businesses.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        businesses.map((business) => (
          <Business key={business.id} business={business} />
        ))
      )}
    </div>
  );
}

export default BusinessList;
