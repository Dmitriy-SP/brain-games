import { getWrongAnswer, getRightAnswer } from '../index.js';

// determine if the user answer correctly
export default (userAnswer, userName, rndNum) => {
  switch (userAnswer) {
    case 'yes':
      if (rndNum % 2 === 0) {
        return getRightAnswer();
      }
      getWrongAnswer(userAnswer, userName, 'no');
      break;
    case 'no':
      if (rndNum % 2 !== 0) {
        return getRightAnswer();
      }
      getWrongAnswer(userAnswer, userName, 'yes');
      break;
    default:
      if (rndNum % 2 !== 0) {
        getWrongAnswer(userAnswer, userName, 'no');
      }
      getWrongAnswer(userAnswer, userName, 'yes');
  }

  return false;
};
