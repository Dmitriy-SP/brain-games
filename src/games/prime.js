import readlineSync from 'readline-sync';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations,
} from '../index.js';

const isPrime = (incomeNum) => {
  for (let i = 2; i < incomeNum; i += 1) {
    if (incomeNum % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  let rndNum;
  let userAnswer;
  const userName = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let check = 0; check < gameRound;) {
    rndNum = getRandom(minNumber, maxNumber);
    console.log(`Question: ${rndNum}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === isPrime(rndNum)) {
      check += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isPrime(rndNum)}'.\nLet's try again, ${userName}`);
      return;
    }
  }

  getCongratulations(userName);
};
