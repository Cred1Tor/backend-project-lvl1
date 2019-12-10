import playGame from '..';

import random from '../utils';

const getProgression = (start, increment, length) => {
  const fillProgression = (acc) => {
    if (acc.length === length) {
      return acc;
    }

    const last = acc[acc.length - 1];
    return fillProgression([...acc, last + increment]);
  };

  return fillProgression([start]);
};

const progressionLength = 10;

const gameObjective = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressionStart = random(20);
  const progressionIncrement = random(1, 15);
  const progression = getProgression(
    progressionStart, progressionIncrement, progressionLength,
  );
  const indexToHide = random(progressionLength - 1);
  const answer = progression[indexToHide].toString();
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
