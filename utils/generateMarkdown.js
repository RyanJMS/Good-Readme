function generateMarkdown(data) {
  return `
  <a href="${data.link}" style="float:left"><img src="${data.avatar}">
  # ${data.title}
  Repo by ${data.name}
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.name}/${data.title})
  

  # Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)


  
  
  ## Description

  ${data.desc}


  ## Installation

  ${data.install}


  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributers}


  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
  
`;
}

module.exports = generateMarkdown;