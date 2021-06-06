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

  const calculateResult = () => {
    if (firstNum !== 0 && secondNum !== 0) {
      if (plus === true) {
        setResult(firstNum + secondNum);
      } else if (minus === true) {
        setResult(firstNum - secondNum);
      } else if (multiply === true) {
        setResult(firstNum * secondNum);
      } else if (divide === true) {
        setResult(firstNum / setSecondNum);
      }
    }
  };

  return (
    <div className="layout-column align-items-center">
      <div
        data-testid="total-operations"
        className="pt-50 total-operations"
      ></div>
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
            ></label>
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
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
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
