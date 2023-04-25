// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if(license != null) {
    if(license == 'Free') {
      badge = "[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/";
    }
    else if (license == 'Student'){
      badge = "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
    }
    else if (license == 'Regular'){
      badge = "[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)";
    }
    else {
      badge = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
    }
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = "";
  if(license != null) {
    if(license == 'Free') {
      link = "https://licensebuttons.net/l/by-nc/4.0/80x15.png)";
    }
    else if (license == 'Student'){
      link = "https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg";
    }
    else if (license == 'Regular'){
      link = "https://licensebuttons.net/l/by-nd/4.0/80x15.png";
    }
    else {
      link = "https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg";
    }
  
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "This instance of this software is using the " + license + " edition of this program";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title};
  ${renderLicenseBadge(answers.License)};
  
  ## Description
  ${answers.Description}
  

  ## Table of Contents 
  * [Description](#description)
  * [Motivation](#motivation)
  * [Reason](#reason)
  * [ProblemSolved](#problemsolved)
  * [Learned](#learned)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#description)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Motivation
  ${answers.Motivation}

  ## Reason
  ${answers.Reason}

  ## Problem Solved
  ${answers.ProblemSolved}

  ## Learned
  ${answers.Learned}

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ${renderLicenseSection(answers.License)}
  ${renderLicenseLink(answers.License)}

  ## Contributing
  ${answers.Contributing}

  ## Tests
  ${answers.Tests}

  ## Questions
  ${answers.GitUsername}
  ${answers.GitHubAddress}
  ${answers.Email}


`;
}

module.exports = generateMarkdown;
