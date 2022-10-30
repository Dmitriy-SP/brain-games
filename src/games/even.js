import { getAnswer } from '../cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations, getWrongAnswer,
} from '../index.js';

// determine if the user answer correctly
const isEven = (userAnswer, userName, rndNum) => {
  switch (userAnswer) {
    case 'yes':
      if (rndNum % 2 === 0) {
        console.log('Correct!');
        return true;
      }
      getWrongAnswer(userAnswer, userName, 'no');
      break;
    case 'no':
      if (rndNum % 2 !== 0) {
        console.log('Correct!');
        return true;
      }
      getWrongAnswer(userAnswer, userName, 'yes')
      break;
    default:
      console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${userName}`);
  }

  return false;
};

// main even-game function
export default () => {
  let rndNum;
  let userAnswer;

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let check = 0; check < gameRound;) {
    rndNum = getRandom(minNumber, maxNumber);
    console.log(`Question: ${rndNum}`);
    userAnswer = getAnswer();

    if (isEven(userAnswer, userName, rndNum) === false) return;
    check += 1;
  }

  getCongratulations(userName);
};
