import playGame, { getGame } from '../index.js';

// module constant
const gameText = 'Answer "yes" if the number is even, otherwise answer "no".';

// is number are even
const isEven = (num) => {
  if (num % 2 === 0) { return true; }
  return false;
};

// get question text and right answer
const getEvenGame = () => getGame(isEven);

// main game function
export default () => playGame(gameText, getEvenGame);
