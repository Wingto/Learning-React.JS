import { useState } from 'react';

function Switch() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
}

ReactDOM.render(
  <Switch />,
  document.getElementById('root')
);