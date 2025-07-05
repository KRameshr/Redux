import React from "react";
import Home from "./Compound/Home";
import Navbar from "./Compound/Navbar";
import Counter from "./Compound/Counter";
import Product from "./Compound/product";
import Producting from "./PactiesAssignment/Producting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      description: "A high-performance laptop for professionals.",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699,
      description: "Latest model with stunning display.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 199,
      description: "Noise-cancelling over-ear headphones.",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 249,
      description: "Fitness tracker with heart rate monitor.",
    },
    {
      id: 5,
      name: "Tablet",
      price: 399,
      description: "Lightweight tablet for work and play.",
    },
    {
      id: 6,
      name: "Monitor",
      price: 299,
      description: "Ultra HD 27-inch monitor.",
    },
    {
      id: 7,
      name: "Keyboard",
      price: 89,
      description: "Mechanical keyboard with RGB lights.",
    },
    {
      id: 8,
      name: "Mouse",
      price: 49,
      description: "Ergonomic wireless mouse.",
    },
    {
      id: 9,
      name: "Webcam",
      price: 89,
      description: "1080p webcam for video conferencing.",
    },
    {
      id: 10,
      name: "Charger",
      price: 39,
      description: "Fast charging USB-C adapter.",
    },
  ];
  return (
    <div>
      <Router>
        <Navbar />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="product" element={<Product />} />
            <Route
              path="Producting"
              element={products.map((product) => (
                <Producting
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                />
              ))}
            />
          </Routes>
        </section>
      </Router>
    </div>
  );
};

export default App;
