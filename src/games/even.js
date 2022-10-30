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
      if (rndNum % 2 === 0) {
        getWrongAnswer(userAnswer, userName, 'no');
      } else {
        getWrongAnswer(userAnswer, userName, 'yes');
      }
  }

  return false;
};
