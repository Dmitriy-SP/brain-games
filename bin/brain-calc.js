#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, isNumber, getCongratulations,
} from '../src/index.js';
import { getOperation, isCalcRight } from '../src/games/calc.js';

const playCalc = () => {
  let rndNum1;
  let rndNum2;
  let operationType;
  let userAnswer;
  const userName = greeting();

  console.log('What is the result of the expression?');

  for (let check = 0; check < gameRound; check += 1) {
    rndNum1 = getRandom(minNumber, maxNumber);
    rndNum2 = getRandom(minNumber, maxNumber);
    operationType = getOperation();
    console.log(`Question: ${rndNum1} ${operationType} ${rndNum2}`);
    userAnswer = getAnswer();

    if (isNumber(userAnswer, (rndNum1 + rndNum2), userName) === false) return;
    if (isCalcRight(userAnswer, userName, rndNum1, rndNum2, operationType) === false) return;
  }

  getCongratulations(userName);
};

playCalc();
