import { getRandom, minNumber, maxNumber, } from '../index.js';

// module canstants
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 20;
const operationTypes = ['+', '-'];

// defining operation sign
const getOperation = () => operationTypes[getRandom(0, operationTypes.length - 1)];

// defining progression
export default (progression) => {
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