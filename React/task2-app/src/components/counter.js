const { useState } = require("react");

const Counter = () => {
  const [Count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <p>{Count}</p>
      <button onClick={incrementCounter}>Увеличить на 1</button>
    </div>
  );
};

export default Counter;
