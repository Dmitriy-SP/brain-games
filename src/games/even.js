import { getRandom, minNumber, maxNumber } from '../cli.js';

// module variable
let rndNum;

// greetings
export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// initialization and get question text
export const getEven = () => {
  rndNum = getRandom(minNumber, maxNumber);
  return rndNum;
};

// get right answer
export const getEvenAnswer = () => {
  if (rndNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
