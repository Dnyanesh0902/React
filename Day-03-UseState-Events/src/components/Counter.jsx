import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow">
        <h1 className="mb-3">Counter App</h1>

        <h2 className="display-4">{count}</h2>

        <div className="mt-3">
          <button 
            className="btn btn-success me-2"
            onClick={() => setCount(count + 1)}
          >
            ➕ Increment
          </button>

          <button 
            className="btn btn-danger me-2"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            ➖ Decrement
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => setCount(0)}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;