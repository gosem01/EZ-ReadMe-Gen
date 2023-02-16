// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "none":
      return "";
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "ibm":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";
    case "eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    case "apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "none":
      return "";
    case "mit":
      return "(https://opensource.org/license/mit-0/)";
    case "ibm":
      return "(https://opensource.org/license/ibmpl-php/)";
    case "eclipse":
      return "(https://opensource.org/license/eclipse-1-0-txt/)";
    case "apache":
      return "(https://opensource.org/license/apache2-0-php/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {
    case "none":
      return "";
    case "mit":
      return "## License\nThis application is covered under the MIT public software license";
    case "ibm":
      return "## License\nThis application is covered under the IBM public software license";
    case "eclipse":
      return "## License\nThis application is covered under the Eclipse public software license";
    case "apache":
      return "## License\nThis application is covered under the Apache commons public software license";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.licensing);
  const licenseBadge = renderLicenseBadge(data.licensing) + renderLicenseLink(data.licensing);

  return `
  # ${data.title}
  
  ## Description

  ${data.description}

  ${licenseBadge}
  
  ## Table of Contents
  
  Links to the document sections for quicker reading.
  
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

${licenseSection}
  
  ## Installation

  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage + "\n"}
  
  ## Contributing

  ${data.contribute}
    
  ## Tests

  \`\`\`
  ${data.testing}
  \`\`\`

  ## Questions

  For any questions feel free to reach out!

  My github user profile can be found [HERE](https://github.com/${data.github})

  [Click here to contact me via email](mailto:${data.email})
  
`;
}

module.exports = generateMarkdown;
