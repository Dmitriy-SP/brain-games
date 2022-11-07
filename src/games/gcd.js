import playGame, { minNumber, maxNumber, getRandom } from '../index.js';

// module constant
const gameText = 'Find the greatest common divisor of given numbers.';

// find GCD
const getGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }

  return (number1 + number2);
};

// get question text and right answer
const getGCDGame = () => {
  const rndNum1 = getRandom(minNumber, maxNumber);
  const rndNum2 = getRandom(minNumber, maxNumber);

  return { question: `${rndNum1} ${rndNum2}`, rightAnswer: (getGCD(rndNum1, rndNum2)).toString() };
};

// main game function
export default () => playGame(gameText, getGCDGame);
