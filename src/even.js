import readlineSync from 'readline-sync';

const getRandom = () => Math.trunc(Math.random() * 100);

export default (userName) => {
  let rndNum;
  let userAnswer;

  for (let check = 0; check < 3;) {
    rndNum = getRandom();
    console.log(`Question: ${rndNum}`);
    userAnswer = readlineSync.question('Your answer: ');
    switch (userAnswer) {
      case 'yes':
        if (rndNum % 2 === 0) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      case 'no':
        if (rndNum % 2 !== 0) {
          check += 1;
          console.log('Correct!');
        } else {
          console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
          return;
        }
        break;
      default:
        console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${userName}`);
        return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
