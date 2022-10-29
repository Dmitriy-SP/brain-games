import readlineSync from 'readline-sync';
import greeting, { gameRound, getRandom } from '../index.js';

export default () => {
  let rndNum;
  let userAnswer;
  const minNumber = 1;
  const maxNumber = 100;

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let check = 0; check < gameRound;) {
    rndNum = getRandom(minNumber, maxNumber);
    console.log(`Question: ${rndNum}`);
    userAnswer = readlineSync.question('Your answer: ');
    switch (userAnswer) {
      case 'yes':
        if (rndNum % 2 === 0) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      case 'no':
        if (rndNum % 2 !== 0) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      default:
        console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${userName}`);
        return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
