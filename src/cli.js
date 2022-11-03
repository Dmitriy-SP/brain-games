import readlineSync from 'readline-sync';

// reading user's name
export default () => readlineSync.question('May I have your name? ');
