// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{type: 'input', name: 'Title', message: 'What is the title of your project?',}, {type: 'input', name: 'Description', message: 'Description of project',},
 {type: 'input', name: 'Motivation', message: 'Motivation for project',}, {type: 'input', name: 'Reason', message: 'Reason for project',},
  {type: 'input', name: 'ProblemSolved', message: 'Problem project solves',}, {type: 'input', name: 'Learned', message: 'What did you learn creating this project?',},
  {type: 'input', name: 'Installation', message: 'Installation instructions',}, {type: 'input', name: 'Usage', message: 'How is this program used?',},
  {type: 'list', name: 'License', message: 'What kind of license?', choices: ['Free', 'Student', 'Regular', 'Enterprise'],}, {type: 'input', name: 'Contributing', message: 'How to contribute?',},
  {type: 'input', name: 'Tests', message: 'How to test this application?',}, {type: 'input', name: 'GitUsername', message: 'What is your GitHub username?',}, 
  {type: 'input', name: 'GitHubAddress', message: 'What is the address of your GitHub profile?',}, {type: 'input', name: 'Email', message: 'What is your email address?',},];

  
// TODO: Create a function to write README file

function writeToFile(fileName, answers) {
  console.log(answers);
  const fileContents = generate(answers)
  fs.writeFileSync('README.md', fileContents)
}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers);
      writeToFile('README.md', answers);
      
    })
    
  
}

// Function call to initialize app
init();
