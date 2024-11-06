"use client"

import { useState } from 'react';
import styles from './kalculator.module.css'; // Pastikan impor ini ada

const Kalkulator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const parseInput = (input) => {
    try {
      const numbers = input.split(/[\+\-\*\/]/).map(Number);
      const operators = input.replace(/[0-9]|\./g, "").split("");

      let tempResult = numbers[0];
      for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
          case "+":
            tempResult += numbers[i + 1];
            break;
          case "-":
            tempResult -= numbers[i + 1];
            break;
          case "*":
            tempResult *= numbers[i + 1];
            break;
          case "/":
            tempResult /= numbers[i + 1];
            break;
          default:
            break;
        }
      }
      return tempResult;
    } catch (error) {
      return "Error";
    }
  };

  const calculate = () => {
    if (input === "1+1") {
      setResult("I love you"); // Khusus untuk "1+1"
    } else {
      const calculatedResult = parseInput(input);
      setResult(calculatedResult);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <input type="text" value={input} readOnly />
        <h1>HASIL YANG KAMU CARI ADALAH</h1>
        <h2>{result}</h2>
      </div>
      <div className={styles.buttons}>
        {["1", "2", "3", "+"].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {["-", "4", "5", "6","*"].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
            <button onClick={() => handleClick("/")}>/</button>
        {["7","8","9"].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
      </div>
    </div>
  );
};

export default Kalkulator;
