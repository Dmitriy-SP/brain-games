#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import greeting, {
  gameRound, getRandom, getCongratulations, isNumber, getWrongAnswer, getRightAnswer,
} from '../src/index.js';
import getProgression from '../src/games/progression.js';

const playProgression = () => {
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
      getRightAnswer();
    } else {
      getWrongAnswer(userAnswer, userName, hiddenNum);
      return;
    }
  }

  getCongratulations(userName);
};

playProgression();
