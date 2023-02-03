// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{type: 'input', name: 'title', message: 'What is the title of your project?',},

  {type: 'input', name: 'description', message: 'Description of project',}, {type: 'input', name: 'motivation', message: 'Motivation for project',}, {type: 'input', name: 'reason', message: 'Reason for project',},
  {type: 'input', name: 'problem', message: 'Problem project solves',}, {type: 'input', name: 'learned', message: 'What did you learn creating this project?',},

  {type: 'input', name: 'installation', message: 'Installation instructions',},

  {type: 'input', name: 'usage', message: 'How is this program used?',},

  {type: 'checkbox', name: 'license', message: 'What kind of license?', choices: ['Free', 'Student', 'Regular', 'Enterprise'],},

  {type: 'input', name: 'contributing', message: 'How to contribute?',},

  {type: 'input', name: 'tests', message: 'How to test this application?',},

  {type: 'input', name: 'username', message: 'What is your GitHub username?',}, {type: 'input', name: 'gaddress', message: 'What is the address of your GitHub profile?',}, {type: 'input', name: 'title', message: 'What is your email address?',},];

  var thelicense;
  var thelink;
  var thebadge;
  var licensemessage;
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
      fs.appendFile('README.md', `${process.argv[2]}\n`, (err) =>
  err ? console.error(err) : console.log('Saved!')
);
}

// TODO: Create a function to initialize app
function init() {
    fs.appendFile('README.md', "Title\n", (err) => {if(err) console.log(err)});
    for(var b = 0; b < 1; b++){
        console.log(questions[b]);
        inquirer.prompt(questions[b]);
        console.log(questions[b].data);
        writeToFile('README.md', questions[b].data);
    }
    
    fs.appendFile('README.md', "# Description <a name='description'></a>\n", (err) => {if(err) console.log(err)});
    for(var c = 1; c < 6; c++) {
        inquirer.prompt(questions[c]);
        writeToFile('README.md', questions[c].data);
    }    
    fs.appendFile('README.md', "## Table of Contents\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[Description](#description)\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[Installation](#installation)\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[Usage](#usage)\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[License](#license)\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[Contributing](#contributing)\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[Tests](#tests)\n", (err) => {if(err) console.log(err)});
    fs.appendFile('README.md', "[Questions](#question)\n", (err) => {if(err) console.log(err)});
    
    fs.appendFile('README.md', "### Installation <a name='installation'></a>\n", (err) => {if(err) console.log(err)});
    for(var d = 6; d < 7; d++) {
      inquirer.prompt(questions[d]);
      writeToFile('README.md', questions[d].data);
  }    
    fs.appendFile('README.md', "#### Usage <a name='usage'></a>\n", (err) => {if(err) console.log(err)});
    for(var e = 7; e < 8; e++) {
      inquirer.prompt(questions[e]);
      writeToFile('README.md', questions[e].data);
  }    
    fs.appendFile('README.md', "##### License <a name='license'></a>\n", (err) => {if(err) console.log(err)});
    // prompt(questions[8]);
    // thebadge = generate.renderLicenseBadge(questions[8].data);
    // thelink = generate.renderLicenseLink(questions[8].data);
    // thelicense = generate.renderLicenseSection(questions[8].data);
    // licensemessage = thelicense + ".  " + thelink;
    // writeToFile('README.md', licensemessage);
    fs.appendFile('README.md', "###### Contributing <a name='contributing'></a>\n", (err) => {if(err) console.log(err)});
    for(var f = 9; f < 10; f++) {
      inquirer.prompt(questions[f]);
      writeToFile('README.md', questions[f].data);
  }    
    fs.appendFile('README.md', "####### Tests <a name='tests'></a>\n", (err) => {if(err) console.log(err)});
    for(var g = 10; g < 11; g++) {
      inquirer.prompt(questions[g]);
      writeToFile('README.md', questions[g].data);
  }    
    fs.appendFile('README.md', "######## Questions <a name='question'></a>\n", (err) => {if(err) console.log(err)});
    for(var h = 11; h < 13; h++) {
      inquirer.prompt(questions[h]);
      writeToFile('README.md', questions[h].data);
  }    

}

// Function call to initialize app
init();
