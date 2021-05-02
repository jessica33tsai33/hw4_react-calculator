import React, {useState} from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App

const CalcApp = () => {
  const [result, setResult] = useState(0);

  // 不知道為甚麼讀不到!
  // function resetState(){
  //   console.log("AC");
  //   setResult(0);
  // }

  const showNotImplemented =() => {
    console.warn('This function is not implemented yet.');
  }

  return(
    <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{result}</div>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-reset" onSetResult={setResult}>AC</CalcButton>
            <CalcButton onClick={showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" result={result} onSetResult={setResult}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>7</CalcButton>
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>8</CalcButton>
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>9</CalcButton>
            <CalcButton className="calc-operator" result={result} onSetResult={setResult}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>4</CalcButton>
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>5</CalcButton>
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>6</CalcButton>
            <CalcButton className="calc-operator" result={result} onSetResult={setResult}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>1</CalcButton>
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>2</CalcButton>
            <CalcButton className="calc-number" result={result} onSetResult={setResult}>3</CalcButton>
            <CalcButton className="calc-operator" result={result} onSetResult={setResult}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="bigger-btn" result={result} onSetResult={setResult}>0</CalcButton>
            <CalcButton className="calc-number" onClick={showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" result={result} onSetResult={setResult}>=</CalcButton>
          </div>
        </div>
    </div>
  );

}

export default CalcApp;
