import playGame from '..';

import random from '../utils';

const operators = ['+', '-', '*'];

const calculate = (operator, a, b) => {
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
  const a = random(100);
  const operator = operators[random(operators.length - 1)];
  const b = operator === '*' ? random(10) : random(100);
  const question = `${a} ${operator} ${b}`;
  const answer = calculate(operator, a, b).toString();
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
