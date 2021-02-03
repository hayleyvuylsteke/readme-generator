// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = function renderLicenseBadge(projectLicense) {
    if (projectLicense === 'Apache License 2.0') {
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

     } else if (projectLicense === 'GNU General Public License v3.0') {
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
     
    } else if (projectLicense === 'MIT License') {
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    
    } else if (projectLicense === 'BSD 2-Clause "Simplified" License') {
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    
    } else if (projectLicense === 'BSD 3-Clause "New" or "Revised" License') {
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    
    } else if (projectLicense === 'Boost Software License 1.0') {
        licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    
    } else if (projectLicense === 'Creative Commons Zero v1.0 Universal') {
        licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    
    } else if (projectLicense === 'Eclipse Public License 2.0') {
        licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    
    } else if (projectLicense === 'GNU Affero General Public License v3.0') {
        licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    
    } else if (projectLicense === 'GNU General Public License v2.0') {
        licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    
    } else if (projectLicense === 'Mozilla Public License 2.0') {
        licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    
    } else if (projectLicense === 'The Unlicense') {
        licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    } else {
        licenseBadge = ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const LicenseLink = function renderLicenseLink (projectLicense) {
    if (projectLicense) {
        LicenseLink = "  - [License] (#License)"
    } else {
        licenceLink = ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const licenseSection = function renderLicenseSection(projectLicense) {
    if (projectLicense === 'Apache License 2.0') {
        licenseSection = "## Licensing<br><br>This project has an [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt) license."

     } else if (projectLicense === 'GNU General Public License v3.0') {
        licenseSection = "## Licensing<br><br>This project has a [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) license."
     
    } else if (projectLicense === 'MIT License') {
        licenseSection = "## Licensing<br><br>This project has a [MIT](https://opensource.org/licenses/MIT) license."
    
    } else if (projectLicense === 'BSD 2-Clause "Simplified" License') {
        licenseSection = "## Licensing<br><br>This project has a [BSD 2-Clause Simplified License](https://opensource.org/licenses/BSD-2-Clause) license."
    
    } else if (projectLicense === 'BSD 3-Clause "New" or "Revised" License') {
        licenseSection = "## Licensing<br><br>This project has a [BSD 3-Clause New or Revised License](https://choosealicense.com/licenses/bsd-3-clause/) license."
    
    } else if (projectLicense === 'Boost Software License 1.0') {
        licenseSection = "## Licensing<br><br>This project has a [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt) license."
    
    } else if (projectLicense === 'Creative Commons Zero v1.0 Universal') {
        licenseSection = "## Licensing<br><br>This project has a [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) license."
    
    } else if (projectLicense === 'Eclipse Public License 2.0') {
        licenseSection = "## Licensing<br><br>This project has a [Eclipse Public License 2.0](https://www.eclipse.org/legal/epl-2.0/) license."
    
    } else if (projectLicense === 'GNU Affero General Public License v3.0') {
        licenseSection = "## Licensing<br><br>This project has a [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) license."
    
    } else if (projectLicense === 'GNU General Public License v2.0') {
        licenseSection = "## Licensing<br><br>This project has a [GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) license."
    
    } else if (projectLicense === 'Mozilla Public License 2.0') {
        licenseSection = "## Licensing<br><br>This project has a [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/) license."
    
    } else if (projectLicense === 'The Unlicense') {
        licenseSection = "## Licensing<br><br>This project has a [The Unlicense](https://unlicense.org/) license."
    
    } else {
        licenseSection = ""
    }
}

const contributingSection = function renderContributingSection(contributingData){
    if (contributingData.contributors && contributingData.pullRequestGuidelines && contributingData.codeOfConduct){
        
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}

        ### Contributors
        ${contributingData.contrubutors}
        
        ### Pull Request Guidelines
        ${contributingData.pullRequestGuideline}

        ### Code of Conduct
        ${contributingData.codeOfConduct}
        
        `
    } else if (contributingData.contributors && contributingData.pullRequestGuidelines) {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}

        ### Contributors
        ${contributingData.contrubutors}
        
        ### Pull Request Guidelines
        ${contributingData.pullRequestGuideline} `
    } else if (contributingData.contributors && contributingData.codeOfConduct) {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}

        ### Contributors
        ${contributingData.contrubutors}

        ### Code of Conduct
        ${contributingData.codeOfConduct}
        
        `
    } else if (contributingData.contributors) {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}

        ### Contributors
        ${contributingData.contrubutors}
        `
    } else if (contributingData.pullRequestGuidelines && contributingData.codeOfConduct) {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}
        
        ### Pull Request Guidelines
        ${contributingData.pullRequestGuideline}

        ### Code of Conduct
        ${contributingData.codeOfConduct}
        
        `
    } else if (contributingData.pullRequestGuidelines) {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}
        
        ### Pull Request Guidelines
        ${contributingData.pullRequestGuideline}`
    } else if (contributingData.codeOfConduct) {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}
        
        ### Code of Conduct
        ${contributingData.codeOfConduct}`

    } else {
        contributingSection = `## Contributing
        ${contributingData.contributingTopGuidelines}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${projectData.projectTitle}

  ${licenseBadge}

  ## Description
  ${projectData.projectDescription}

  ## Table of Contents
  - [Installation] (#Installation)
  - [Usage] (#Usage)
  ${LicenseLink}
  - [Contributing] (#Contributing)
  - [Tests] (#Tests)
  - [Questions] (#Questions)

  ## Installation
  ${projectData.projectInstallation}

  ## Usage
  ${projectData.projectUsage}

  ${licenseSection}

  ## Contributing

  ${contributingSection}

  ## Tests

  ## Questions
  If you have questions about this project:
  ${projectData.questionHandling}

  ### Project Owner Contact Information
  [${projectData.projectOwnerEmail}](mailto:${projectData.projectOwnerEmail}). You can find me on GitHub [here](https://github.com/${projectData.projectOwnerGitUserName}).


`;
}

module.exports = generateMarkdown;
