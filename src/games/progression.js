import playGame from '../index.js';
import getRandom from '../utils.js';

// module canstants
const minNumber = 1;
const maxNumber = 100;
const gameText = 'What number is missing in the progression?';

// defining progression
const getProgression = (operationType, start, rndLength, rndStep) => {
  const progression = [];
  progression[0] = start;

  for (let i = 1; i < rndLength; i += 1) {
    progression[i] = progression[i - 1] + rndStep * operationType;
  }

  return progression;
};

// get question text and right answer
export const generateRound = () => {
  const length = { min: 5, max: 10 };
  const step = { min: 1, max: 20 };
  // 1 for '+', -1 for '-'
  const operationTypes = [1, -1];

  const operationType = operationTypes[getRandom(0, operationTypes.length - 1)];
  const start = getRandom(minNumber, maxNumber);
  const rndLength = getRandom(length.min, length.max);
  const rndStep = getRandom(step.min, step.max);

  const progression = getProgression(operationType, start, rndLength, rndStep);
  const hiddenNumIndex = getRandom(0, progression.length - 1);
  const hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';

  return { question: progression.join(' '), rightAnswer: hiddenNum.toString() };
};

// main game function
export default () => playGame(gameText, generateRound);
