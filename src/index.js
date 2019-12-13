import readlineSync from 'readline-sync';

const turnsCount = 3;

export default (gameObjective, getQuestionAndAnswer) => {
  console.log('Welcome to  the Brain Games!');
  console.log(`${gameObjective}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const playGame = (turnsLeft) => {
    if (turnsLeft === 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return playGame(turnsLeft - 1);
    }

    console.log(`'${userAnswer}' is a wrong answer ;( Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    return false;
  };

  return playGame(turnsCount);
};
