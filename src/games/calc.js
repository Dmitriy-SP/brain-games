import playGame, { minNumber, maxNumber, getRandom } from '../index.js';

// module canstants
const operationTypes = ['+', '-', '*'];
const gameText = 'What is the result of the expression?';

// module variable
let operationResult;

// initialization and get question text
export const getCalc = () => {
  const rndNum1 = getRandom(minNumber, maxNumber);
  const rndNum2 = getRandom(minNumber, maxNumber);
  const operationType = operationTypes[getRandom(0, operationTypes.length - 1)];

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

// main game function
export default () => {
  playGame(gameText, getCalc, getCalcAnswer);
};
