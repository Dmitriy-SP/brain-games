import playGame, { minNumber, maxNumber, getRandom } from '../index.js';

// module constant
const gameText = 'Answer "yes" if the number is even, otherwise answer "no".';

// module variable
let rndNum;

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

// main game function
export default () => {
  playGame(gameText, getEven, getEvenAnswer);
};
