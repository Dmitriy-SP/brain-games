import readlineSync from 'readline-sync';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations, isNumber,
} from '../index.js';

const GCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return (number1 + number2);
};

export default () => {
  let rndNum1;
  let rndNum2;
  let userAnswer;
  let varGCD;
  const userName = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let check = 0; check < gameRound;) {
    rndNum1 = getRandom(minNumber, maxNumber);
    rndNum2 = getRandom(minNumber, maxNumber);
    console.log(`Question: ${rndNum1} ${rndNum2}`);
    userAnswer = readlineSync.question('Your answer: ');

    varGCD = GCD(rndNum1, rndNum2);
    if (isNumber(userAnswer, varGCD, userName) === false) {
      return;
    }

    if (Number(userAnswer) === varGCD) {
      check += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${varGCD}'.\nLet's try again, ${userName}`);
      return;
    }
  }

  getCongratulations(userName);
};
