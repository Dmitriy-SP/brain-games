#!/usr/bin/env node

import askUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

console.log(`Hello, ${userName}!`);
