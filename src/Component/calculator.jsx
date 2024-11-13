import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (e) => setInput(e.target.value);

  const calculate = () => setResult(eval(input)); // Be careful with eval

  return (
    <div>
      <h2>Calculator</h2>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
