import { getAnswer } from '../cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations, getWrongAnswer,
} from '../index.js';

// determining if a variable is prime
const isPrime = (incomeNum) => {
  for (let i = 2; i < incomeNum; i += 1) {
    if (incomeNum % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// main prime-game function
export default () => {
  let rndNum;
  let userAnswer;
  const userName = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let check = 0; check < gameRound;) {
    rndNum = getRandom(minNumber, maxNumber);
    console.log(`Question: ${rndNum}`);
    userAnswer = getAnswer();

    if (userAnswer === isPrime(rndNum)) {
      check += 1;
      console.log('Correct!');
    } else {
      getWrongAnswer(userAnswer, userName, isPrime(rndNum));
      return;
    }
  }

  getCongratulations(userName);
};
