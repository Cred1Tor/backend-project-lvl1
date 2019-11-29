import readlineSync from 'readline-sync';

export const greet = () => console.log('Welcome to  the Brain Games!');

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return name;
};

const getGameObjective = (game) => game('gameObjective');

const getQuestionAndAnswer = (game) => game('questionAndAnswer');

export const playGame = (game) => {
  greet();
  console.log(`${getGameObjective(game)}\n`);
  const userName = getName();

  const playOneTurn = () => {
    const [question, correctAnswer] = getQuestionAndAnswer(game);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${userAnswer}' is a wrong answer ;( Correct answer was '${correctAnswer}'.`);
    return false;
  };

  const playNTurns = (n) => {
    if (n === 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    if (playOneTurn()) {
      return playNTurns(n - 1);
    }

    console.log(`Let's try again, ${userName}`);
    return false;
  };

  return playNTurns(3);
};
