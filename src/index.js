import askUserName from './cli.js';

export const gameRound = 3;

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getRandom = (minNumber, maxNumber) => Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
