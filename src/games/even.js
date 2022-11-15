import playGame from '../index.js';
import getRandom from '../utils.js';

// module constant
const gameText = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

// is number are even
const isEven = (num) => {
  if (num % 2 === 0) { return true; }
  return false;
};

// get question text and right answer
const generateRound = () => {
  const rndNum = getRandom(minNumber, maxNumber);
  return { question: rndNum, rightAnswer: isEven(rndNum) ? 'yes' : 'no' };
};

// main game function
export default () => playGame(gameText, generateRound);
