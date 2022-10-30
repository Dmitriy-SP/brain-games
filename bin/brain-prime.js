#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import greeting, {
  gameRound, getRandom, minNumber, maxNumber, getCongratulations, getWrongAnswer,
} from '../src/index.js';
import isPrime from '../src/games/prime.js'

const playPrime = () => {
    let rndNum;
    let userAnswer;
    const userName = greeting();
  
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
    for (let check = 0; check < gameRound;) {
      rndNum = getRandom(minNumber, maxNumber);
      console.log(`Question: ${rndNum}`);
      userAnswer = getAnswer();
  
      if (userAnswer === isPrime(rndNum)) {
        check += 1;
        console.log('Correct!');
      } else {
        getWrongAnswer(userAnswer, userName, isPrime(rndNum));
        return;
      }
    }
  
    getCongratulations(userName);
  };
  
playPrime();