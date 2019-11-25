import readlineSync from 'readline-sync';
export { greetByName };

const greetByName = () => {
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}`);
};
