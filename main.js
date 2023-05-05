const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorKeys = document.querySelector('.calculator-keys');
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const handleInput = (event) => {
  const { target: { value } } = event;
  const { screenValue, isOperator } = getScreenValueAndCheckIfIsOperator(value);
  calculatorScreen.value = screenValue;
  if (isOperator) {
    handleOperator(value);
  } else {
    handleNumber(value);
  }
};

const getScreenValueAndCheckIfIsOperator = (value) => {
  const screenValue = calculatorScreen.value;
  const isOperator = !!value.match(/[*+\-/]/);
  return { screenValue, isOperator };
};

const handleOperator = (value) => {
  const lastScreenValue = calculatorScreen.value.slice(-1);
  if (lastScreenValue === '') {
    return;
  }
  if (waitingForSecondOperand) {
    operator = value;
    return;
  }
  if (firstOperand === null) {
    firstOperand = Number(calculatorScreen.value);
  } else {
    const secondOperand = Number(calculatorScreen.value);
    calculate(firstOperand, secondOperand, operator);
    firstOperand = result;
  }
  waitingForSecondOperand = true;
  operator = value;
};

const handleNumber = (value) => {
  if (waitingForSecondOperand) {
    calculatorScreen.value = '';
    waitingForSecondOperand = false;
  }
  calculatorScreen.value += value;
};

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      result = null;
      break;
  }
  calculatorScreen.value = result;
};

const resetCalculator = () => {
  calculatorScreen.value = '';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
};

calculatorKeys.addEventListener('click', handleInput);

document.addEventListener('keydown', (event) => {
  const { key } = event;
  if (/^[0-9+\-*/.]$/.test(key)) {
    const button = calculatorKeys.querySelector(`[value="${key}"]`);
    if (button) button.click();
  } else if (key === 'Enter' || key === '=') {
    const button = calculatorKeys.querySelector('.equal');
    if (button) button.click();
  } else if (key === 'Escape') {
    resetCalculator();
  } else if (key === 'Backspace') {
    calculatorScreen.value = calculatorScreen.value.slice(0, -1);
  }
});

