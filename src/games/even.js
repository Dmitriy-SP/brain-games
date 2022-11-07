import playGame, { minNumber, maxNumber, getRandom } from '../index.js';

// module constant
const gameText = 'Answer "yes" if the number is even, otherwise answer "no".';

// is number are even
const isEven = (num) => {
  if (num % 2 === 0) { return true; }
  return false;
};

// get question text and right answer
const getEvenGame = () => {
  const rndNum = getRandom(minNumber, maxNumber);
  const answer = isEven(rndNum) ? 'yes' : 'no';
  return { question: rndNum, rightAnswer: answer };
};

// main game function
export default () => playGame(gameText, getEvenGame);
