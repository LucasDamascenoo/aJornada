import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function aumenta() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={aumenta}>Click para aumentar</button>
    </div>
  );
}

export default App;
