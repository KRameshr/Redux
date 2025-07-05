import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../Store/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Redux Counter Example</h2>
      <p>the Redux count is : {count} </p>
      <button onClick={() => dispatch(increment(2))}>++</button>
      <button onClick={() => dispatch(decrement(2))}>--</button>
      <button onClick={() => dispatch(reset(0))}>resect</button>
    </div>
  );
};

export default Counter;
