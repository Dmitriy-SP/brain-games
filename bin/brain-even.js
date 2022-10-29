#!/usr/bin/env node

import askUserName from '../src/cli.js';
import toBrainEven from '../src/even.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
toBrainEven(userName);
