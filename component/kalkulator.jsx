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
      setResult("Halo sayangku meli hari ini cape banget ya, semangat terus ya cantiknya akuu, I LOVE YOU ");
    } 
    else if (input === "1+2") {
      setResult("wanita hebatku yang selalu memendam lelahnya sendiri yang selalu memendam sakitnya sendiri, kamu wanita hebat yang aku kenal wanita kuat yang selalu aku banggakan dan selalu aku cintai");
    }
    else if (input === "1+3") {
        setResult("aku minta maaf jika aku selalu menyakitimu selalu membuatmu merasa kesepian tapi jangan berfikir aku tidak sayang kamu, aku disini sedang berusaha keras berjuang untuk menjadi yang kamu mau");
      }
      else if (input === "1+4") {
        setResult("doakan aku semoga keiinginan kita dapat terwujud");
      }
      else if (input === "1+5") {
        setResult("sayangku meli I LOVE YOU");
      }
    else {
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
        <h3>{result}</h3>
      </div>
      <div className={styles.buttons}>
        {["1", "2", "3", "+"].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {["4", "5", "6", "-"].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {["7","8","9","*"].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      {/* Tombol WhatsApp */}
      <a
        href="https://wa.me/6285893802972?text=Halo%20sayang%20aku%20suka%20banget%20makasih%20ayang"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        Hubungi jika kalkulator ini mengalami gangguan
      </a>
    </div>
  );
};

export default Kalkulator;
