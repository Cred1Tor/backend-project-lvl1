import * as _ from 'lodash';

const gcd = (a, b) => {
  const remainder = a % b;
  if (remainder === 0) {
    return b;
  }
  return gcd(b, remainder);
};

export default (message) => {
  switch (message) {
    case 'gameObjective':
      return 'Find the greatest common divisor of given numbers.';
    case 'questionAndAnswer': {
      const number1 = _.random(10, 100);
      const number2 = _.random(10, 100);
      const question = `${number1} ${number2}`;
      const answer = gcd(number1, number2).toString();
      return [question, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
