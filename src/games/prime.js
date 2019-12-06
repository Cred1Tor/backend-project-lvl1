import playGame from '..';

import random from '../utils';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const iter = (index) => {
    if (index > Math.sqrt(n)) {
      return true;
    }

    return n % index === 0 ? false : iter(index + 1);
  };

  return iter(2);
};

const gameObjective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const value = random(1, 200);
  const answer = isPrime(value) ? 'yes' : 'no';
  return [value, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
