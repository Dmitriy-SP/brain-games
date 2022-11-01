import { getRandom, minNumber, maxNumber } from '../cli.js';

// module variable
let rndNum;

// greetings
export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

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
