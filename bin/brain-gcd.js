#!/usr/bin/env node

import greeting, { minNumber, gameRound, maxNumber, getRandom, isNumber, getWrongAnswer, getCongratulations } from '../src/index.js';
import { getAnswer } from '../src/cli.js';
import isGCD from '../src/games/gcd.js';

const playGCD = () => {
    let rndNum1;
    let rndNum2;
    let userAnswer;
    let varGCD;
    const userName = greeting();
  
    console.log('Find the greatest common divisor of given numbers.');
  
    for (let check = 0; check < gameRound;) {
      rndNum1 = getRandom(minNumber, maxNumber);
      rndNum2 = getRandom(minNumber, maxNumber);
      console.log(`Question: ${rndNum1} ${rndNum2}`);
      userAnswer = getAnswer();
  
      varGCD = isGCD(rndNum1, rndNum2);
      if (isNumber(userAnswer, varGCD, userName) === false) {
        return;
      }
  
      if (Number(userAnswer) === varGCD) {
        check += 1;
        console.log('Correct!');
      } else {
        getWrongAnswer(userAnswer, userName, varGCD);
        return;
      }
    }
  
    getCongratulations(userName);
  };

  playGCD();
