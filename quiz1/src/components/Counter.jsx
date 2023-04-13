import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
        <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
      </div>
    </div>
  );
}

export default Counter;
