import * as _ from 'lodash';

export default (message) => {
  switch (message) {
    case 'gameObjective':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 'questionAndAnswer': {
      const number = _.random(100);
      const answer = number % 2 === 0 ? 'yes' : 'no';
      return [number, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
