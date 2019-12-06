import playGame from '..';

import random from '../utils';

const isEven = (value) => value % 2 === 0;

const gameObjective = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const value = random(100);
  const question = value;
  const answer = isEven(value) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
