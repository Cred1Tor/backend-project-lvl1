import * as _ from 'lodash';

const isPrime = (n) => {
  if (n === 1) {
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

export default (message) => {
  switch (message) {
    case 'gameObjective':
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';
    case 'questionAndAnswer': {
      const number = _.random(1, 200);
      const answer = isPrime(number) ? 'yes' : 'no';
      return [number, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
