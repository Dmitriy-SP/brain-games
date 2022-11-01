import { getRandom, minNumber, maxNumber } from '../cli.js';

// module canstants
const operationTypes = ['+', '-', '*'];

// module variable
let operationResult;

// definition of operation type
const getOperation = () => operationTypes[getRandom(0, operationTypes.length - 1)];

// greetings
export default () => {
  console.log('What is the result of the expression?');
};

// initialization and get question text
export const getCalc = () => {
  const rndNum1 = getRandom(minNumber, maxNumber);
  const rndNum2 = getRandom(minNumber, maxNumber);
  const operationType = getOperation();

  switch (operationType) {
    case '+':
      operationResult = rndNum1 + rndNum2;
      break;
    case '-':
      operationResult = rndNum1 - rndNum2;
      break;
    case '*':
      operationResult = rndNum1 * rndNum2;
      break;
    default:
  }

  return `${rndNum1} ${operationType} ${rndNum2}`;
};

// get right answer
export const getCalcAnswer = () => operationResult;
