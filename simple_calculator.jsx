import React, { useState } from "react";

/**
 * SimpleCalculator – a minimal React component that performs basic arithmetic.
 * It provides two numeric inputs and a dropdown to select an operation (+, -, *, /).
 * The result is shown in real‑time as the user changes the inputs.
 */
const SimpleCalculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState("+");

  const calculate = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (Number.isNaN(x) || Number.isNaN(y)) return "";
    switch (op) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return y !== 0 ? x / y : "∞";
      default:
        return "";
    }
  };

  const result = calculate();

  return (
    <div style={{ maxWidth: "300px", margin: "1rem", fontFamily: "sans-serif" }}>
      <h3>Simple Calculator</h3>
      <div style={{ marginBottom: "0.5rem" }}>
        <input
          type="number"
          value={a}
          onChange={e => setA(e.target.value)}
          style={{ width: "80px", marginRight: "0.5rem" }}
        />
        <select value={op} onChange={e => setOp(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={b}
          onChange={e => setB(e.target.value)}
          style={{ width: "80px", marginLeft: "0.5rem" }}
        />
      </div>
      <div>
        <strong>Result: </strong>{result}
      </div>
    </div>
  );
};

export default SimpleCalculator;
