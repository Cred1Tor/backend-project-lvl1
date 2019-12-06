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
  const a = random(10, 100);
  const b = random(10, 100);
  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString();
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
