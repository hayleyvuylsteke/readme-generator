// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderContributingSection(){}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${projectData.projectTitle}

  ## Description
  ${projectData.projectDescription}

  ## Table of Contents
  1. Installation
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions

  ## Installation
  ${projectData.projectInstallation}

  ## Usage
  ${projectData.projectUsage}

  ## Licencing

  ## Contributing

  ## Tests

  ## Questions
  If you have questions about this project, please reach me by email at [${projectData.projectOwnerEmail}](mailto:${projectData.projectOwnerEmail}). You can find me on GitHub [here](https://github.com/${projectData.projectOwnerGitUserName}).


`;
}

module.exports = generateMarkdown;
