import readlineSync from 'readline-sync';
import greeting, { gameRound, getRandom } from '../index.js';

const operationTypes = ['+', '-', '*'];

const getOperation = () => operationTypes[getRandom(0, operationTypes.length - 1)];

export default () => {
  let rndNum1;
  let rndNum2;
  let operationType;
  let userAnswer;
  const minNumber = 0;
  const maxNumber = 100;
  const userName = greeting();

  console.log('What is the result of the expression?');

  for (let check = 0; check < gameRound;) {
    rndNum1 = getRandom(minNumber, maxNumber);
    rndNum2 = getRandom(minNumber, maxNumber);
    operationType = getOperation();
    console.log(`Question: ${rndNum1} ${operationType} ${rndNum2}`);
    userAnswer = Number(readlineSync.question('Your answer: '));

    switch (operationType) {
      case '+':
        if (userAnswer === (rndNum1 + rndNum2)) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${(rndNum1 + rndNum2)}'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      case '-':
        if (userAnswer === (rndNum1 - rndNum2)) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${(rndNum1 - rndNum2)}'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      case '*':
        if (userAnswer === (rndNum1 * rndNum2)) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${(rndNum1 * rndNum2)}'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      default:
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
