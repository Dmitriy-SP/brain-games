import askUserName, { getAnswer, gameRound } from './cli.js';
import toGreetCalc, { getCalc, getCalcAnswer } from './games/calc.js';
import toGreetEven, { getEven, getEvenAnswer } from './games/even.js';
import toGreetGCD, { getGCD, getGCDAnswer } from './games/gcd.js';
import toGreetPrime, { getPrime, getPrimeAnswer } from './games/prime.js';
import toGreetProg, { getProg, getProgAnswer } from './games/progression.js';

// module variable
let userAnswer;

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
const getWrongAnswer = (userName, rightAnswer) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);

// writing if user get right answer
const getRightAnswer = () => {
  console.log('Correct!');
  return true;
};

// defining is variable a number
const isNumber = (rightAnswer, userName) => {
  if (!Number(userAnswer)) {
    getWrongAnswer(userName, rightAnswer);
    return true;
  }
  return false;
};

// start game greeting
const toGreetStart = (gameType) => {
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
};

// get question text
const getQuestion = (gameType) => {
  switch (gameType) {
    case 'calc':
      return getCalc();
    case 'even':
      return getEven();
    case 'gcd':
      return getGCD();
    case 'prime':
      return getPrime();
    case 'prog':
      return getProg();
    default:
  }

  return 'error';
};

// get right answer
const getA = (gameType, userName) => {
  let rightAnswer;
  switch (gameType) {
    case 'calc':
      rightAnswer = getCalcAnswer();
      if (isNumber(rightAnswer, userName)) { return NaN; }
      userAnswer = Number(userAnswer);
      break;
    case 'even':
      rightAnswer = getEvenAnswer();
      break;
    case 'gcd':
      rightAnswer = getGCDAnswer();
      if (isNumber(rightAnswer, userName)) { return NaN; }
      userAnswer = Number(userAnswer);
      break;
    case 'prime':
      rightAnswer = getPrimeAnswer();
      break;
    case 'prog':
      rightAnswer = getProgAnswer();
      if (isNumber(rightAnswer, userName)) { return NaN; }
      userAnswer = Number(userAnswer);
      break;
    default:
  }

  return rightAnswer;
};

// main fuctrion
export default (gameType) => {
  let question;
  let rightAnswer;

  const userName = getGreet();
  toGreetStart(gameType);

  for (let check = 0; check < gameRound; check += 1) {
    question = getQuestion(gameType);
    console.log(`Question: ${question}`);
    userAnswer = getAnswer();
    rightAnswer = getA(gameType, userAnswer, userName);
    if (Number.isNaN(rightAnswer)) { return; }
    if (userAnswer !== rightAnswer) {
      getWrongAnswer(userName, rightAnswer);
      return;
    }
    getRightAnswer();
  }

  getCongratulations(userName);
};
