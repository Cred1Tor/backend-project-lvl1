import { playGame, random } from '..';

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
  const number1 = random(100);
  const operator = operators[random(operators.length - 1)];
  const number2 = operator === '*' ? random(10) : random(100);
  const question = `${number1} ${operator} ${number2}`;
  const answer = operation(operator, number1, number2).toString();
  return [question, answer];
};

export default () => playGame(gameObjective, getQuestionAndAnswer);
