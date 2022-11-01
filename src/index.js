import askUserName, { getAnswer, gameRound } from './cli.js';
import toGreetCalc, { getCalc, getCalcAnswer } from './games/calc.js';
import toGreetEven, { getEven, getEvenAnswer } from './games/even.js';
import toGreetGCD, { getGCD, getGCDAnswer } from './games/gcd.js';
import toGreetPrime, { getPrime, getPrimeAnswer } from './games/prime.js';
import toGreetProg, { getProg, getProgAnswer } from './games/progression.js';

// user greeting
export const getGreet = () => {
  console.log('Welcome to the Brain Games!');

  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

// user congratulations
const getCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

// writing if user get wrong answer
const getWrongAnswer = (userAnswer, userName, rightAnswer) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);

// writing if user get right answer
const getRightAnswer = () => {
  console.log('Correct!');
  return true;
};

// defining is variable a number
const isNumber = (userAnswer, rightAnswer, userName) => {
  if (!Number(userAnswer)) {
    getWrongAnswer(userAnswer, userName, rightAnswer);
    return true;
  }
  return false;
};

// main fuctrion
export default (gameType) => {
  let userAnswer;
  let quest;
  let rightAnswer;

  const userName = getGreet();

  switch (gameType) {
    case 'calc':
      toGreetCalc();
      break;
    case 'even':
      toGreetEven();
      break;
    case 'gcd':
      toGreetGCD();
      break;
    case 'prime':
      toGreetPrime();
      break;
    case 'prog':
      toGreetProg();
      break;
    default:
  }

  for (let check = 0; check < gameRound; check += 1) {
    switch (gameType) {
      case 'calc':
        quest = getCalc();
        break;
      case 'even':
        quest = getEven();
        break;
      case 'gcd':
        quest = getGCD();
        break;
      case 'prime':
        quest = getPrime();
        break;
      case 'prog':
        quest = getProg();
        break;
      default:
    }

    console.log(`Question: ${quest}`);
    userAnswer = getAnswer();

    switch (gameType) {
      case 'calc':
        rightAnswer = getCalcAnswer();
        if (isNumber(userAnswer, rightAnswer, userName)) { return; }
        userAnswer = Number(userAnswer);
        break;
      case 'even':
        rightAnswer = getEvenAnswer(quest);
        break;
      case 'gcd':
        rightAnswer = getGCDAnswer();
        if (isNumber(userAnswer, rightAnswer, userName)) { return; }
        userAnswer = Number(userAnswer);
        break;
      case 'prime':
        rightAnswer = getPrimeAnswer();
        break;
      case 'prog':
        rightAnswer = getProgAnswer();
        if (isNumber(userAnswer, rightAnswer, userName)) { return; }
        userAnswer = Number(userAnswer);
        break;
      default:
    }

    if (userAnswer !== rightAnswer) {
      getWrongAnswer(userAnswer, userName, rightAnswer);
      return;
    }
    getRightAnswer();
  }

  getCongratulations(userName);
};
