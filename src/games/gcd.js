import * as _ from 'lodash';
import { playGame } from '..';

const gcd = (a, b) => {
  const remainder = a % b;
  if (remainder === 0) {
    return b;
  }
  return gcd(b, remainder);
};

const gameObjective = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const number1 = _.random(10, 100);
  const number2 = _.random(10, 100);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2).toString();
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
