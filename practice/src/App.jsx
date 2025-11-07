import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleUp = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };
  const handleDown = () => {
    setCounter((prev) => {
      return prev - 1;
    });
  };
  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={handleUp}>up</button>
      <button onClick={handleDown}>down</button>
    </>
  );
}

export default App;
