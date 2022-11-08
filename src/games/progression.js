import playGame from '../index.js';
import getRandom from '../utils.js';

// module canstants
const minNumber = 1;
const maxNumber = 100;
const gameText = 'What number is missing in the progression?';

// defining progression
const getProgression = (length, step, operationTypes) => {
  const rndLength = getRandom(length.min, length.max);
  const rndStep = getRandom(step.min, step.max);
  const progression = [];
  progression[0] = getRandom(minNumber, maxNumber);
  const operationType = operationTypes[getRandom(0, operationTypes.length - 1)];

  for (let i = 1; i < rndLength; i += 1) {
    progression[i] = progression[i - 1] + rndStep * operationType;
  }

  return progression;
};

// get question text and right answer
export const getProgGame = () => {
  const length = { min: 5, max: 10 };
  const step = { min: 1, max: 20 };
  const operationTypes = [1, -1];
  const progression = getProgression(length, step, operationTypes);
  const hiddenNumIndex = getRandom(0, progression.length - 1);
  const hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';

  return { question: progression.join(' '), rightAnswer: hiddenNum.toString() };
};

// main game function
export default () => playGame(gameText, getProgGame);
