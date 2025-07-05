import React from "react";
import css from "../App.css";
const Producting = ({ name, price, description }) => {
  return (
    <div className="app-container">
      <h1>Product Catalog</h1>
      <div className="employee-list">
        <div className="employee-card">
          <h3>{name}</h3>
          <p>price: {price}</p>
          <p>description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Producting;
