import { getAnswer } from '../cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations, isNumber, getWrongAnswer,
} from '../index.js';

// local module canstants
const operationTypes = ['+', '-', '*'];

// definition of operation type
const getOperation = () => operationTypes[getRandom(0, operationTypes.length - 1)];

// determine if the user calculation correctly
const isCalcRight = (userAnswer, userName, rndNum1, rndNum2, operationType) => {
  switch (operationType) {
    case '+':
      if (Number(userAnswer) === (rndNum1 + rndNum2)) {
        console.log('Correct!');
        return true;
      }
        getWrongAnswer(userAnswer, userName, (rndNum1 + rndNum2));
      break;
    case '-':
      if (Number(userAnswer) === (rndNum1 - rndNum2)) {
        console.log('Correct!');
        return true;
      }
        getWrongAnswer(userAnswer, userName, (rndNum1 - rndNum2));
      break;
    case '*':
      if (Number(userAnswer) === (rndNum1 * rndNum2)) {
        console.log('Correct!');
        return true;
      }
        getWrongAnswer(userAnswer, userName, (rndNum1 * rndNum2));
      break;
    default:
  }

  return false;
};

// main calc-game function
export default () => {
  let rndNum1;
  let rndNum2;
  let operationType;
  let userAnswer;
  const userName = greeting();

  console.log('What is the result of the expression?');

  for (let check = 0; check < gameRound;) {
    rndNum1 = getRandom(minNumber, maxNumber);
    rndNum2 = getRandom(minNumber, maxNumber);
    operationType = getOperation();
    console.log(`Question: ${rndNum1} ${operationType} ${rndNum2}`);
    userAnswer = getAnswer();

    if (isNumber(userAnswer, (rndNum1 + rndNum2), userName) === false) return;
    if (isCalcRight(userAnswer, userName, rndNum1, rndNum2, operationType) === false) return;
    check += 1;
  }

  getCongratulations(userName);
};
