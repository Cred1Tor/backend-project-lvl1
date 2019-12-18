import playGame from '..';

import random from '../utils';

const getProgression = (start, increment, length) => {
  const fillProgression = (acc) => {
    if (acc.length === length) {
      return acc;
    }

    const last = acc[acc.length - 1];
    const newAcc = acc.length === 0 ? [start] : [...acc, last + increment];
    return fillProgression(newAcc);
  };

  return fillProgression([]);
};

const length = 10;

const gameObjective = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const start = random(20);
  const increment = random(1, 15);
  const progression = getProgression(
    start, increment, length,
  );
  const hiddenItemIndex = random(length - 1);
  const answer = progression[hiddenItemIndex].toString();
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
