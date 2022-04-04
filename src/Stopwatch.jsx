import { useState } from "react";
const Stopwatch = () => {
  const [display, setdisplay] = useState(0);
  let start = () => {};
  return (
    <div className="stopwatch">
      <h1>{display}</h1>
      <div className="controls">
        <button>Reset</button>
        <button onClick={start}>Start</button>
        <button>Pause</button>
      </div>
    </div>
  );
};

export default Stopwatch;
