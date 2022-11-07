import playGame, { minNumber, maxNumber, getRandom } from '../index.js';

// module canstants
const operationTypes = ['+', '-', '*'];
const gameText = 'What is the result of the expression?';

// get question text and right answer
const getCalcGame = () => {
  const rndNum1 = getRandom(minNumber, maxNumber);
  const rndNum2 = getRandom(minNumber, maxNumber);
  const operationType = operationTypes[getRandom(0, operationTypes.length - 1)];
  let operationResult;

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

  return { question: `${rndNum1} ${operationType} ${rndNum2}`, rightAnswer: operationResult.toString() };
};

// main game function
export default () => playGame(gameText, getCalcGame);
