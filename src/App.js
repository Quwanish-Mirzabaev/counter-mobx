import React from "react";
import ReactDOM from "react-dom/client";
import { observer } from "mobx-react";
import counterStore from "./CounterStore";

const App = observer(() => {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counterStore.count}</p>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
    </div>
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
