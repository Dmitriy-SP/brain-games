#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations,
} from '../src/index.js';
import isEven from '../src/games/even.js';

const playBrainEven = () => {
  let rndNum;
  let userAnswer;

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let check = 0; check < gameRound; check += 1) {
    rndNum = getRandom(minNumber, maxNumber);
    console.log(`Question: ${rndNum}`);
    userAnswer = getAnswer();

    if (isEven(userAnswer, userName, rndNum) === false) return;
  }

  getCongratulations(userName);
};

playBrainEven();
