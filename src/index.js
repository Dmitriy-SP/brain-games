import readlineSync from 'readline-sync';

// module variable
let userAnswer;

// global constants
const gameRound = 3;
export const minNumber = 1;
export const maxNumber = 100;

// get random number in specified range
export const getRandom = (minNum, maxNum) => Math.trunc(Math.random() * (maxNum - minNum) + minNum);

// main cycle fuction
export default (gameText, getQuestion, getQuestionAnswer) => {
  let question;
  let rightAnswer;

  console.log('Welcome to the Brain Games!');
  console.log(gameText);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let check = 0; check < gameRound; check += 1) {
    question = getQuestion();
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    rightAnswer = getQuestionAnswer(userAnswer);

    if (Number(rightAnswer) && Number(userAnswer)) {
      userAnswer = Number(userAnswer);
    }
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
