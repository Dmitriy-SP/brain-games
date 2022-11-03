import playGame, { getRandom, minNumber, maxNumber } from '../index.js';

// module canstants
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 20;
const operationTypes = ['+', '-'];
const gameText = 'What number is missing in the progression?';

// module variable
let hiddenNum;

// defining progression
const getProgression = () => {
  const rndLength = getRandom(minLength, maxLength);
  const rndStep = getRandom(minStep, maxStep);
  const progression = [];
  progression[0] = getRandom(minNumber, maxNumber);
  const operationType = operationTypes[getRandom(0, operationTypes.length - 1)];

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

// initialization and get question text
export const getProg = () => {
  const progression = getProgression();
  const hiddenNumIndex = getRandom(0, progression.length);
  hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  return progression.join(' ');
};

// get right answer
export const getProgAnswer = () => hiddenNum;

// main game function
export default () => {
  playGame(gameText, getProg, getProgAnswer);
};
