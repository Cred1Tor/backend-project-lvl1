import readlineSync from 'readline-sync';

export const greet = () => console.log('Welcome to  the Brain Games!');

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return name;
};

export const playEven = () => {
  greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const userName = getName();

  const playOneTurn = () => {
    const number = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is a wrong answer ;( Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    return false;
  };

  const playNTurns = (n) => {
    if (n === 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    return playOneTurn() ? playNTurns(n - 1) : false;
  };

  return playNTurns(3);
};
