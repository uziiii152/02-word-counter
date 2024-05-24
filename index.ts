import inquirer from 'inquirer'

const questions:{sentence:string} = await inquirer.prompt([{
    name:'sentence',
    type: 'input',
    message: 'Enter your text for calculating words'
}]);

const words = questions.sentence.trim().split(' ')
console.log(words);

console.log(`your total words: ${words.length}`);
