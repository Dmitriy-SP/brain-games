import readlineSync from 'readline-sync';

// module constants
const gameRoundsNumber = 3;

// main cycle fuction
export default (gameText, generateRound) => {
  console.log(`Welcome to the Brain Games!\n${gameText}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < gameRoundsNumber; i += 1) {
    const { question, rightAnswer } = generateRound();
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
