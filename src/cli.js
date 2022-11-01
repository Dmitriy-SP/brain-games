import readlineSync from 'readline-sync';

// global constants
export const gameRound = 3;
export const minNumber = 1;
export const maxNumber = 100;

// reading user's name
export default () => readlineSync.question('May I have your name? ');

// reading user's answer
export const getAnswer = () => readlineSync.question('Your answer: ');

// get random number in specified range
export const getRandom = (minNum, maxNum) => Math.trunc(Math.random() * (maxNum - minNum) + minNum);
