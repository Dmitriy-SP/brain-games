import askUserName from './cli.js';

// global constants
export const gameRound = 3;
export const minNumber = 1;
export const maxNumber = 100;

// user greeting
export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

// user congratulations
export const getCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

// get random number in specified range
export const getRandom = (minNum, maxNum) => Math.trunc(Math.random() * (maxNum - minNum) + minNum);

// defining is variable a number
export const isNumber = (userAnswer, rightAnswer, userName) => {
  if (Number.isNaN(userAnswer) === true) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
    return false;
  }
  return true;
};

// writing if user get wrong answer
export const getWrongAnswer = (userAnswer, userName, rightAnswer) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);

// writing if user get right answer
export const getRightAnswer = () => {
  console.log('Correct!');
  return true;
};
