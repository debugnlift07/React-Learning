import { useState } from "react";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(0); // state

  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Hello from react</h1>
      <Message count={count}></Message> [/* props */]
      <button onClick={handleCounter}>Click Counter</button>
    </>
  );
}

export default App;
