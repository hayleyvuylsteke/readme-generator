// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./src/page-template');


// TODO: Create an array of questions for user input

const promptUser = projectData => {
    console.log(`
    =================
    Welcome to the README Generator!
    =================
    I'm going to ask you a few questions about your project so I can build out a comprehensive README file for you. Let's begin.
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a project name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe your project in detail (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectInstallation',
            message: 'What are the installation requirements for your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter installation requirements!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectUsage',
            message: 'What is the usage of your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a useage!');
                return false;
              }
            }
          },
          {
            type: 'list',
            name: 'projectLicence',
            message: 'What licence would you like to apply to your project? (Required)',
            choices: ['Apacge License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to select a license!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectTests',
            message: 'What are the tests run on your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter testing details!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectTests',
            message: 'What are the tests run on your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter testing details!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectOwnerGitUserName',
            message: 'What is your GitHub user name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'projectOwnerEmail',
            message: 'What is your email address? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your email address!');
                return false;
              }
            }
          },
    ])
};

const promptContributing = contributingData => {
    console.log(`
    =================
    I have a few questions about contributing to your project
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'contributingTopGuidelines',
            message: 'Enter any intro text to your contributing section.',
          },
          {
            type: 'confirm',
            name: 'confirmPullRequest',
            message: 'Do you have a specific pull request procedure?',
            default: true
          },
          {
            type: 'input',
            name: 'pullRequestGuidelines',
            message: 'Please describe your pull request process:',
            when: ({ confirmPullRequest }) => confirmPullRequest
          },
          {
            type: 'confirm',
            name: 'confirmCodeOfConduct',
            message: 'Do you have a code of conduct?',
            default: true
          },
          {
            type: 'input',
            name: 'codeOfConduct',
            message: 'Please describe your code of conduct:',
            when: ({ confirmCodeOfConduct }) => confirmCodeOfConduct
          },
    ])
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

promptUser()
  .then(promptContributing)
  .then(projectData => {
    const projectDataInfo = generatePage(projectData)
  .then(contributingData => {
    const contributingDataInfo = generatePage(contributingData)
    })

    fs.writeFile('./README.md', (projectDataInfo + contributingDataInfo), err => {
      if (err) throw new Error(err);

      console.log('Your Readme file has been created! Check out README.md in this directory to see it!');
    });
  });

// Function call to initialize app
//init();
