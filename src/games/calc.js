import * as _ from 'lodash';

const add = (a, b) => (a + b);
const sub = (a, b) => (a - b);
const mul = (a, b) => (a * b);

const operators = [[add, '+'], [sub, '-'], [mul, '*']];


export default (message) => {
  switch (message) {
    case 'gameObjective':
      return 'What is the result of the expression?';
    case 'questionAndAnswer': {
      const number1 = _.random(100);
      const operator = operators[_.random(2)];
      const operatorSymbol = operator[1];
      const operatorFunc = operator[0];
      const number2 = operatorSymbol === '*' ? _.random(10) : _.random(100);
      const question = `${number1} ${operatorSymbol} ${number2}`;
      const answer = operatorFunc(number1, number2).toString();
      return [question, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
