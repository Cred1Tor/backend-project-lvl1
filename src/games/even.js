import * as _ from 'lodash';
import { playGame } from '..';

const isEven = (number) => number % 2 === 0;

const gameObjective = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = _.random(100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
