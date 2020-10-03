<!-- All batches -->
[![GitHub package.json version][GitHub-version]]()
[![GitHub last commit][commit]]()
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Netlify Status](https://api.netlify.com/api/v1/badges/6bcdcbf3-b98f-492e-b3cb-444b5ea5510e/deploy-status)](https://app.netlify.com/sites/joke-bot/deploys)

<!-- PROJECT LOGO -->
<br>
<p align="center">
  <a href="https://github.com/rirtakmanna/Joke-BOT">
  <img src="./src/assets/logo.svg" alt="Logo" width="120" height="120">
</a>
<h2 align="center">Joke BOT</h2>
<p align="center">
  The website generates a Joke and converts it into speech.
  <br />
  <a href="https://github.com/rirtakmanna/Joke-BOT/blob/master/README.md"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <a href="https://joke-BOT.netlify.app" target="_blank">View Demo</a>
  ·
  <a href="https://github.com/rirtakmanna/Joke-BOT/issues">Report Bug</a>
  ·
  <a href="https://github.com/rirtakmanna/Joke-BOT/issues">Request Feature</a>
</p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [:clipboard: Built With](#clipboard-built-with)
- [:open_file_folder: Joke BOT Structure](#open_file_folder-joke-bot-structure)
- [:checkered_flag: Getting Started](#checkered_flag-getting-started)
- [Prerequisites](#prerequisites)
- [:sparkles: Installation](#sparkles-installation)
- [Usage](#usage)
- [:round_pushpin: Roadmap](#round_pushpin-roadmap)
- [:v: Contributing](#v-contributing)
- [:memo: License](#memo-license)
- [Author](#author)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://joke-BOT.netlify.app)

The website generates random jokes with Sv443 (https://sv443.net/jokeapi/v2/) random Joke API and then converts it into speech with VoiceRSS (http://www.voicerss.org/api/) text to speech API. For some animation, I used Lottie web Animation and connect them with speech.

### :clipboard: Built With
>I build This project with this framwork:

* [Lottie](http://airbnb.io/lottie)
* [Parceljs](https://parceljs.org/)
* [Babeljs](https://babeljs.io/)
* [SASS](https://sass-lang.com/)
* [Voice RSS API](http://www.voicerss.org/)
* [JokeAPI](https://sv443.net/jokeapi/v2/)
## :open_file_folder: Joke BOT Structure
>You will have a very simple folder structure:

  ```
  Joke BOT
  ├── README.md
  ├── postcss.config.js
  ├── package.json
  ├── LICENSE.md
  ├── cssnano.config.js
  ├── .gitignore
  ├── .babelrc
  ├── src
  │   └── assets (all Assets here)
  │   └── js
  │   │   └── app.js
  │   └── sass
  │   │   └── _mixins.scss
  │   │   └── main.scss
  │   └── index.html
  ├── build (File for production)
  ```


<!-- GETTING STARTED -->
## :checkered_flag: Getting Started
>To get a local copy up and running follow these simple example steps.
### Prerequisites
* npm
```sh
npm install npm@latest -g
```
### :sparkles: Installation
1. Clone the repo
```sh
git clone https://github.com/rirtakmanna/Joke-BOT.git
```
2. Install NPM packages
```sh
npm install
```
<!-- USAGE EXAMPLES -->
## Usage


<!-- ROADMAP -->
## :round_pushpin: Roadmap
See the [open issues](https://github.com/rirtakmanna/Joke-BOT/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## :v: Contributing
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## :memo: License

Copyright © 2020 [Rirtak Manna](https://github.com/rirtakmanna).<br />
This project is [MIT](https://github.com/rirtakmanna/Joke-BOT/blob/master/LICENSE.md) licensed.

## Author

👤 **Rirtak Manna**

- Website: http://rirtakmanna.com
- Twitter: [@manna_rirtak](https://twitter.com/manna_rirtak)
- Github: [@rirtakmanna](https://github.com/rirtakmanna)

<!-- All links  -->
[GitHub-version]: https://img.shields.io/github/package-json/v/rirtakmanna/Joke-BOT
[commit]: https://img.shields.io/github/last-commit/rirtakmanna/Joke-BOT?color=green
[issues-shield]: https://img.shields.io/github/issues/rirtakmanna/Joke-BOT
[issues-url]: https://github.com/rirtakmanna/Joke-BOT/issues
[license-shield]: https://img.shields.io/badge/license-MIT-red
[license-url]: https://github.com/rirtakmanna/Joke-BOT/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/twitter/follow/manna_rirtak?label=Twitter
[linkedin-url]: https://linkedin.com/in/manna_rirtak
[product-screenshot]: ./src/assets/screenshot.gif

