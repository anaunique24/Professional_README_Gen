const inquirer = require('inquirer');
const fs = require('fs');

const createFile = (response) =>
`
 # ${response.title}
 
 ## Description
 ${response.description}
 
 ## Table of Contents
 - [Installation] (#Installation)
 - [Usage](#Usage)
 - [License](#License)
 - [Contributions](#Contributions)
 - [Tests](#Tests)
 - [Questions](#Questions)
 
 ## Installation
 ${response.installation}

 ## Usage
 ${response.usage}
 
 ## License
 ${response.license}
 [![License](https://img.shields.io/badge/License-${response.licenses}-green.svg)](https://opensource.org/licenses/${response.licenses})
 
 ## Contributions
 ${response.contributions}
 
 ## Tests
 ${response.tests}
 
 ## Questions
 Any Questions can be answered at ${response.userEmail}
 
 https://github.com/${response.gitHubName}`

 inquirer.prompt([
    {
        type: "input",
        message: "Please insert the name of your project.",
        name: "title"
    },
    {
        type: "input",
        message: "Please insert your name.",
        name: "userName"
    },
    {
        type: "input",
        message: "Please insert a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please give the installation process.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please explain how to use your application.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select licenses used.",
        name: "license",
        choices: ["MIT", "Boost Software License 1.0", "Eclipse Public License 2.0", "The Unlicense", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        message: "Please list contributors here.",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please explain the testing processes used.",
        name: "tests"
    },
    {
        type: "input",
        message: "Please insert your GitHub accounts email.",
        name: "userEmail"
    },
    {
        type: "input",
        message: "Please insert your GitHub username.",
        name: "gitHubName"
    },
 ])

 .then((file) => {
    const content = createFile(file)
    fs.writeFile("README.md", content, (error) => 
    error ? console.log("This is the error", error) : console.log("README.md created succesfully"));
});