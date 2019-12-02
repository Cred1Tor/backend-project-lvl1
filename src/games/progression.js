import * as _ from 'lodash';

import { random, playGame } from '..';

const getRandomProgressionArray = () => {
  const start = random(20);
  const increment = random(1, 10);

  const fillProgression = (acc) => {
    if (acc.length === 10) {
      return acc;
    }

    return fillProgression([...acc, _.last(acc) + increment]);
  };

  return fillProgression([start]);
};

const progressionGame = (message) => {
  switch (message) {
    case 'gameObjective':
      return 'What number is missing in the progression?';
    case 'questionAndAnswer': {
      const progression = getRandomProgressionArray();
      const indexToHide = random(9);
      const answer = progression[indexToHide].toString();
      progression[indexToHide] = '..';
      const question = progression.join(' ');
      return [question, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};

export default () => playGame(progressionGame);
