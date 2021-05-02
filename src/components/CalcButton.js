import React from 'react';
import PropTypes from 'prop-types';


function showNotImplemented() {
  console.warn('This function is not implemented yet.');
}

let operator = "";
let oldOperator = "";

let lastVarible = "";
let tempResult = 0;
let digit = 0;
let lastResult = 0;

const CalcButton = (props) => {
  const { className, children, onClick } = props;
  const extraClass = className || '';
  
  const computing = () => {
    if(className === "calc-number" || className === "bigger-btn"){
      if(lastVarible === "" || lastVarible === "=" || lastVarible === "AC"){
        tempResult = parseInt(children, 10);
      }
      else if(lastVarible === "+" || lastVarible === "-" || lastVarible === "x" || lastVarible === "÷"){
        tempResult = parseInt(children, 10);
      }
      else{
        tempResult = tempResult * Math.pow(10, digit) + parseInt(children, 10);
      }
      props.onSetResult(tempResult);
      digit = 1;
    }
    else if(className === "calc-operator"){
      oldOperator = operator;
      operator = children;
      if(operator === "="){
        console.log(oldOperator);
        if(oldOperator === "+"){ props.onSetResult(parseInt(lastResult, 10)+props.result);}
        else if(oldOperator === "-"){ props.onSetResult(parseInt(lastResult, 10)-props.result);}
        else if(oldOperator === "x"){ props.onSetResult(parseInt(lastResult, 10)*props.result);}
        else if(oldOperator === "÷"){ props.onSetResult(parseInt(lastResult, 10)/props.result);}
      }
      else{
        lastResult = tempResult;
        props.onSetResult(lastResult);
      }
      digit = 0;
    }

    else if(className === "calc-reset"){
      props.onSetResult(0);
      digit = 0;
    }

    lastVarible = children;
  }
  return (
    <button
      className={`calc-btn ${extraClass}`}
      onClick={computing}
    >
      {children}
    </button>
  );
};


CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CalcButton;
