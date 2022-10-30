import readlineSync from 'readline-sync';

// reading user's name
export default () => readlineSync.question('May I have your name? ');

// reading user's answer
export const getAnswer = () => readlineSync.question('Your answer: ');
