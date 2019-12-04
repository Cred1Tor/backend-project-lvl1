import readlineSync from 'readline-sync';

export const random = (min, max) => (max === undefined ? random(0, min)
  : Math.floor(Math.random() * (max + 1 - min) + min));

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return name;
};

export const playGame = (gameObjective, getQuestionAndAnswer) => {
  console.log('Welcome to  the Brain Games!');
  console.log(`${gameObjective}\n`);
  const userName = getName();

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
