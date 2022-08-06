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
  : license === 'Unlicense' ? 'https://opensource.org/licenses/unlicense'
  : license === 'GPLv2' ? 'https://opensource.org/licenses/GPL-2.0'
  : license === 'Apache' ? 'https://opensource.org/licenses/Apache-2.0'
  : license === 'GPLv3' ? 'https://opensource.org/licenses/GPL-3.0'
  : 'http://www.wtfpl.net/about/';
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
    ## License

    Distributed under the "${license}" License.
    ${renderLicenseBadge(license)}

    [Click Here for More Information](${renderLicenseLink(license)})

    ---
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
    # ${data.title}
    ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;