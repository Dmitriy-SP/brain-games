import readlineSync from 'readline-sync';

// module constants
const gameRound = 3;

// main cycle fuction
export default (gameText, getQuestion) => {
  console.log(`Welcome to the Brain Games!\n${gameText}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let check = 0; check < gameRound; check += 1) {
    const { question, rightAnswer } = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
