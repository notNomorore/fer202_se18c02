import { Button } from "react-bootstrap";
import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
function Counter() {
  // Sử dụng useReducer để quản lý trạng thái count
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div >
      <h1>Counter: {state.count}</h1>
      <Button style={{margin: 3}} onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
      <Button style={{margin: 3}} variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
      <Button style={{margin: 3}} variant="secondary"onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </div>
  );
}

export default Counter;
