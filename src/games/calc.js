import playGame from '../index.js';
import getRandom from '../utils.js';

// module canstants
const operationTypes = ['+', '-', '*'];
const gameText = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;

// calculating
const getCalc = (num1, num2, type) => {
  if (type === '+') { return num1 + num2; }
  if (type === '-') { return num1 - num2; }
  return num1 * num2;
};

// get question text and right answer
const getCalcGame = () => {
  const rndNum1 = getRandom(minNumber, maxNumber);
  const rndNum2 = getRandom(minNumber, maxNumber);
  const type = operationTypes[getRandom(0, operationTypes.length - 1)];

  return { question: `${rndNum1} ${type} ${rndNum2}`, rightAnswer: getCalc(rndNum1, rndNum2, type).toString() };
};

// main game function
export default () => playGame(gameText, getCalcGame);
