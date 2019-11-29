import * as _ from 'lodash';

const getRandomProgressionArray = () => {
  const start = _.random(20);
  const increment = _.random(1, 10);

  const fillProgression = (acc) => {
    if (acc.length === 10) {
      return acc;
    }

    return fillProgression([...acc, _.last(acc) + increment]);
  };

  return fillProgression([start]);
};

export default (message) => {
  switch (message) {
    case 'gameObjective':
      return 'What number is missing in the progression?';
    case 'questionAndAnswer': {
      const progression = getRandomProgressionArray();
      const indexToHide = _.random(9);
      const answer = progression[indexToHide].toString();
      progression[indexToHide] = '..';
      const question = progression.join(' ');
      return [question, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
