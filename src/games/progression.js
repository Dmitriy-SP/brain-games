import { getAnswer } from '../cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations, isNumber, getWrongAnswer,
} from '../index.js';

// module canstants
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 20;
const operationTypes = ['+', '-'];

// defining operation sign
const getOperation = () => operationTypes[getRandom(0, operationTypes.length - 1)];

// defining progression
const getProgression = (progression) => {
  const rndLength = getRandom(minLength, maxLength);
  const rndStep = getRandom(minStep, maxStep);
  progression.length = 0;
  progression[0] = getRandom(minNumber, maxNumber);
  const operationType = getOperation();

  switch (operationType) {
    case '+':
      for (let i = 1; i < rndLength; i += 1) {
        progression[i] = progression[i - 1] + rndStep;
      }
      break;
    case '-':
      for (let i = 1; i < rndLength; i += 1) {
        progression[i] = progression[i - 1] - rndStep;
      }
      break;
    default:
  }

  return progression;
};

// main progression-game function
export default () => {
  let userAnswer;
  let hiddenNum;
  let hiddenNumIndex;
  const progression = [];

  const userName = greeting();
  console.log('What number is missing in the progression?');

  for (let check = 0; check < gameRound;) {
    getProgression(progression);
    hiddenNumIndex = getRandom(0, progression.length);
    hiddenNum = progression[hiddenNumIndex];
    progression[hiddenNumIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    userAnswer = getAnswer();

    if (isNumber(userAnswer, hiddenNum, userName) === false) {
      return;
    }

    if (Number(userAnswer) === hiddenNum) {
      check += 1;
      console.log('Correct!');
    } else {
      getWrongAnswer(userAnswer, userName, hiddenNum);
      return;
    }
  }

  getCongratulations(userName);
};
