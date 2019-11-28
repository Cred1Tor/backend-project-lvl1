import readlineSync from 'readline-sync';

export const greet = () => console.log('Welcome to  the Brain Games!');

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
