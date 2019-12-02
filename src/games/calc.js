import * as _ from 'lodash';

const operators = ['+', '-', '*'];

const operation = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator '${operator}'`);
  }
};

export default (message) => {
  switch (message) {
    case 'gameObjective':
      return 'What is the result of the expression?';
    case 'questionAndAnswer': {
      const number1 = _.random(100);
      const operator = operators[_.random(operators.length - 1)];
      const number2 = operator === '*' ? _.random(10) : _.random(100);
      const question = `${number1} ${operator} ${number2}`;
      const answer = operation(operator, number1, number2).toString();
      return [question, answer];
    }
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
