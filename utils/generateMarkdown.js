// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeImage = license === 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                  : license === 'Unlicense' ? '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
                  : license === 'GPLv2' ? '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
                  : license === 'Apache' ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                  : license === 'GPLv3' ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                  : '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
  return badgeImage;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = license === 'MIT' ? 'https://opensource.org/licenses/MIT'
  : license === 'Unlicense' ? 'http://unlicense.org/'
  : license === 'GPLv2' ? 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  : license === 'Apache' ? 'https://opensource.org/licenses/Apache-2.0'
  : license === 'GPLv3' ? 'https://www.gnu.org/licenses/gpl-3.0'
  : 'http://www.wtfpl.net/about/';
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

    Distributed under the "${license}" License.
    ${renderLicenseBadge(license)}

    [Click Here for More Information](${renderLicenseLink(license)})

    ---
  `;
}

renderBuiltWithSection = (languages) => {
  if(!languages) {
    return;
  }
  let badgeStringArr = [];
  for(let i = 0; i < languages.length; i++) {
    let badgeString = languages[i] === 'JavaScript' ? '[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)'
                    : languages[i] === 'HTML' ? '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)(https://developer.mozilla.org/en-US/docs/Glossary/HTML5)'
                    : languages[i] === 'CSS' ? '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)(https://developer.mozilla.org/en-US/docs/Web/CSS)'
                    : languages[i] === 'Node.js' ? '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)(https://nodejs.org/en/about/)'
                    : languages[i] === 'jQuery' ? '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)(https://jquery.com/)'
                    : languages[i] === 'Markdown' ? '[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)'
                    : '';
    badgeStringArr.push(badgeString);
  }
  return badgeStringArr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description
    
    ${data.motivation}

    ${data.reason}

    ${data.problem}

    ${data.learned}

    ## Built With

    ${renderBuiltWithSection(data.builtWith).map((item) => `-${item}
    `).join('')}

    ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;