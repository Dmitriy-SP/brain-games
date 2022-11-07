import playGame, { getRandom, minNumber, maxNumber } from '../index.js';

// module canstants
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 20;
const operationTypes = [1, -1];
const gameText = 'What number is missing in the progression?';

// defining progression
const getProgression = () => {
  const rndLength = getRandom(minLength, maxLength);
  const rndStep = getRandom(minStep, maxStep);
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
  const progression = getProgression();
  const hiddenNumIndex = getRandom(0, progression.length);
  const hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  return { question: progression.join(' '), rightAnswer: hiddenNum.toString() };
};

// main game function
export default () => playGame(gameText, getProgGame);
