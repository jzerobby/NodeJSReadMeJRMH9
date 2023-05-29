// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "The MIT License") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license == "The 2-Clause BSD License") {
    return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
  } else if (license == "The 3-Clause BSD License") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (license == "None") {
   return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "The MIT License") {
   return "https://opensource.org/license/mit/";
  } else if (license == "The 2-Clause BSD License") {
   return "https://opensource.org/license/bsd-2-clause/";
  } else if (license == "The 3-Clause BSD License") {
    return "https://opensource.org/license/bsd-3-clause/";
  } else if (license == "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `This project is under this ${license}. To read more about this license please follow this link ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, reason, solution, learned, installation, usage, license, contributing, tests, github, email}) {
  return `# Title ${title}

  ## Badges
  ${renderLicenseBadge(license)}

  ## Description
  ${reason}. ${solution}. ${learned}.

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}.

  ## Usage
  ${usage}
  Link to walkthrough video - https://drive.google.com/file/d/16xPsSHtm-q8TPRW2t_zxwvBwPYSY_3IS/view?usp=sharing\n
  Link to README file - https://vscode.dev/github/jzerobby/NodeJSReadMeJRMH9/blob/main/utils/README.md

  ## License
  ${renderLicenseSection(license)}.

  ## Contributing
  Click on this link on how to contribute ${contributing}.
  
  ## Tests
  ${tests}.

  ## Questions
  ${github} - Github username

  ${email} - go to this email address to reach me with additional questions.
`;
}

module.exports = generateMarkdown;
