import * as _ from 'lodash';
import { playGame } from '..';

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

const gameObjective = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const number1 = _.random(100);
  const operator = operators[_.random(operators.length - 1)];
  const number2 = operator === '*' ? _.random(10) : _.random(100);
  const question = `${number1} ${operator} ${number2}`;
  const answer = operation(operator, number1, number2).toString();
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
