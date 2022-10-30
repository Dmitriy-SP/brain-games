import { getWrongAnswer } from '../index.js';

// determine if the user answer correctly
export default (userAnswer, userName, rndNum) => {
  switch (userAnswer) {
    case 'yes':
      if (rndNum % 2 === 0) {
        console.log('Correct!');
        return true;
      }
      getWrongAnswer(userAnswer, userName, 'no');
      break;
    case 'no':
      if (rndNum % 2 !== 0) {
        console.log('Correct!');
        return true;
      }
      getWrongAnswer(userAnswer, userName, 'yes');
      break;
    default:
      console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${userName}`);
  }

  return false;
};
