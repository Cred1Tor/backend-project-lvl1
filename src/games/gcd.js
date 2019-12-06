import playGame from '..';

import random from '../utils';

const gcd = (a, b) => {
  const remainder = a % b;
  if (remainder === 0) {
    return b;
  }
  return gcd(b, remainder);
};

const gameObjective = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const number1 = random(10, 100);
  const number2 = random(10, 100);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2).toString();
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
