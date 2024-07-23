import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    alert("Couter Updated : The new value is : " + counter);
  }, [counter]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="bg-blue-500 text-white p-4 rounded-xl"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="bg-red-500 text-white p-4 rounded-xl"
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
