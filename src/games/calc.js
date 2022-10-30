import {
  getRandom, getWrongAnswer,
} from '../index.js'; 

// local module canstants
const operationTypes = ['+', '-', '*'];

// definition of operation type
export const getOperation = () => operationTypes[getRandom(0, operationTypes.length - 1)];

// determine if the user calculation correctly
export const isCalcRight = (userAnswer, userName, rndNum1, rndNum2, operationType) => {
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