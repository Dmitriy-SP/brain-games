import playGame, { minNumber, maxNumber, getRandom } from '../index.js';

// module constant
const gameText = 'Find the greatest common divisor of given numbers.';

// module variables
let rndNum1;
let rndNum2;

// initialization and get question text
export const getGCD = () => {
  rndNum1 = getRandom(minNumber, maxNumber);
  rndNum2 = getRandom(minNumber, maxNumber);
  return `${rndNum1} ${rndNum2}`;
};

// get right answer
export const getGCDAnswer = () => {
  let number1 = rndNum1;
  let number2 = rndNum2;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }

  return (number1 + number2);
};

// main game function
export default () => {
  playGame(gameText, getGCD, getGCDAnswer);
};
