import React, { useState, useEffect } from "react";
import "./index.css";

export default function Calculator() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [result, setResult] = useState(0);

  const [plus, setPlus] = useState(false);
  const [minus, setMinus] = useState(false);
  const [multiply, setMultiply] = useState(false);
  const [divide, setDivide] = useState(false);

  const [label, setLabel] = useState("+");

  const [count, setCount] = useState(0);

  const resetAll = () => {
    setPlus(false);
    setMinus(false);
    setResult(0);
    setMultiply(false);
    setDivide(false);
    setLabel("+");
    setFirstNum(0);
    setSecondNum(0);
    setCount(0);
  };

  const handlePlus = () => {
    setPlus(true);
    setMinus(false);
    setMultiply(false);
    setDivide(false);
    calculateResult();
  };

  const handleMinus = () => {
    setPlus(false);
    setMinus(true);
    setMultiply(false);
    setDivide(false);
    calculateResult();
  };

  const handleMultiply = () => {
    setPlus(false);
    setMinus(false);
    setMultiply(true);
    setDivide(false);
    calculateResult();
  };

  const handleDivide = () => {
    setPlus(false);
    setMinus(false);
    setMultiply(false);
    setDivide(true);
    calculateResult();
  };

  const calculateResult = () => {
    if (firstNum !== 0 && secondNum !== 0) {
      if (plus === true) {
        setResult(parseInt(firstNum) + parseInt(secondNum));
      } else if (minus === true) {
        setResult(parseInt(firstNum) - parseInt(secondNum));
      } else if (multiply === true) {
        setResult(parseInt(firstNum) * parseInt(secondNum));
      } else if (divide === true) {
        setResult(parseInt(firstNum) / parseInt(setSecondNum));
      }
    }
  };

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">
        Total operations performed: {count}
      </div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              type="number"
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
              value={firstNum}
              onChange={(e) => setFirstNum(e.target.value)}
            />
            <label
              className="ml-2 mr-2 symbol text-center"
              data-testid="selected-operator"
              value={
                plus ? "+" : minus ? "-" : multiply ? "*" : divide ? "/" : "+"
              }
            >
              {plus ? "+" : minus ? "-" : multiply ? "*" : divide ? "/" : "+"}
            </label>
            <input
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
              value={secondNum}
              onChange={(e) => setSecondNum(e.target.value)}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              data-testid="addButton"
              onClick={() => {
                handlePlus();
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
              onClick={() => {
                handleMinus();
                setCount(count + 1);
              }}
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
              onClick={() => {
                handleMultiply();
                setCount(count + 1);
              }}
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
              onClick={() => {
                handleDivide();
                setCount(count + 1);
              }}
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
              onClick={resetAll}
            >
              Reset
            </button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div
                data-testid="result"
                className="result-value ma-0 slide-up-fade-in"
              >
                Result: {result}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
