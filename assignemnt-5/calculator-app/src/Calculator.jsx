import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "+":
        setResult(a + b);
        break;

      case "-":
        setResult(a - b);
        break;

      case "*":
        setResult(a * b);
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(a / b);
        }
        break;

      default:
        setResult("Invalid Operation");
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="button-group">
        <button className="add" onClick={() => calculate("+")}>
          Add
        </button>

        <button className="subtract" onClick={() => calculate("-")}>
          Subtract
        </button>

        <button className="multiply" onClick={() => calculate("*")}>
          Multiply
        </button>

        <button className="divide" onClick={() => calculate("/")}>
          Divide
        </button>
      </div>

      <div className="result-box">
        <h3>Result</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default Calculator;