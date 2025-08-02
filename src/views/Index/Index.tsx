import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleIncrease}>-</button>
      <p>{count}</p>
      <button onClick={handleDecrease}>+</button>
    </div>
  );
}
