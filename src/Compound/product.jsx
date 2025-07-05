import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Ramesh", score: "firstclass" },
    { id: 2, name: "Gagesh", score: "firstclass" },
    { id: 3, name: "Suresh", score: "second class" },
    { id: 4, name: "Ramkrishna", score: "firstclass" },
  ];
  const myScore = (id) => {
    if (localStorage.getItem("myscore") != undefined) {
      let arr = JSON.parse(localStorage.getItem("myscore"));
      if (arr.includes(id)) {
        alert("Already in a cart");
      } else {
        arr.push(id);
        localStorage.setItem("myscore", JSON.stringify(arr));
        dispatch(addCart(arr));
        alert("add successfull");
      }
    } else {
      let arr = [];
      arr.push(id);
      localStorage.setItem("myscore", JSON.stringify(arr));
      dispatch(addCart(arr));
      alert("add successfull");
    }
  };
  return (
    <div>
      <h2>laste product</h2>
      <div className="row">
        {products.map((pro) => (
          <div key={pro.id} className="col-sm-4">
            <h4>{pro.name}</h4>
            <p>Grade {pro.score}</p>
            <button className="btn btn-primary" onClick={() => myScore(pro.id)}>
              Selection
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
