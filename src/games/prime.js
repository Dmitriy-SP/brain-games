import playGame, { getRandom, minNumber, maxNumber } from '../index.js';

// module constant
const gameText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// module variable
let rndNum;

// initialization and get question text
export const getPrime = () => {
  rndNum = getRandom(minNumber, maxNumber);
  return rndNum;
};

// get right answer
export const getPrimeAnswer = () => {
  for (let i = 2; i < rndNum; i += 1) {
    if (rndNum % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// main game function
export default () => {
  playGame(gameText, getPrime, getPrimeAnswer);
};
