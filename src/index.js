import askUserName from './cli.js';

export const gameRound = 3;
export const minNumber = 1;
export const maxNumber = 100;

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const getRandom = (minNum, maxNum) => Math.trunc(Math.random() * (maxNum - minNum) + minNum);

export const isNumber = (userAnswer, rightAnswer, userName) => {
  if (Number.isNaN(userAnswer) === true) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
    return false;
  }
  return true;
};
