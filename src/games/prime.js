import playGame, { getRandom, minNumber, maxNumber } from '../index.js';

// module constant
const gameText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// is number prime
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) { return false; }
  }
  return true;
};

// get question text and right answer
const getPrimeGame = () => {
  const rndNum = getRandom(minNumber, maxNumber);
  return { question: rndNum, rightAnswer: isPrime(rndNum) ? 'yes' : 'no' };
};

// main game function
export default () => playGame(gameText, getPrimeGame);
