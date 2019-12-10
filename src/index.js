import readlineSync from 'readline-sync';

const turnsCount = 3;

export default (gameObjective, getQuestionAndAnswer) => {
  console.log('Welcome to  the Brain Games!');
  console.log(`${gameObjective}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const playOneTurn = () => {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${userAnswer}' is a wrong answer ;( Correct answer was '${correctAnswer}'.`);
    return false;
  };

  for (let i = turnsCount; i > 0; i -= 1) {
    const outcome = playOneTurn();
    if (!outcome) {
      console.log(`Let's try again, ${userName}`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
