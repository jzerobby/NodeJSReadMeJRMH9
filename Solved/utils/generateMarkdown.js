// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, motivation, reason, solution, learned, installation, usage, license, contributing, tests, github, email}) {
  return `# Title ${title}

  ## Description
  ${motivation}.${reason}.${solution}.${learned}.

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
  ${usage}.

  ## License
  ${license}.

  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}

  ## Questions
  ${github}

  ${email} - go to this email address to reach me with additional questions.
`;
}

module.exports = generateMarkdown;
