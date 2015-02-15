# Trait- Personality Analysis for Social Media
![Badge of Honor](https://img.shields.io/badge/Built%20at-Fullstack-green.svg?style=flat-square)
> Web App that analyzes personality traits based on LinkedIn profile, Tweets, or input text.

## Table of Contents

- [Examples](#examples)
- [Usage](#usage)
- [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [License](#license)

## Examples
### Demo

See a live version of the app [here](http://trait.herokuapp.com/login).

### Live Demo

![Sphynx Example](http://i.imgur.com/Rn6A5zk.gif)
_Above: An example of the working app.


```html
• Incorporated IBM Watson User Modeling API with LinkedIn and Twitter APIs to analyze users personality traits 
• Engineered elegant UI using Angular Material Design, and managed data with interactive D3 graph 
• Won most Technically Challenging Award At FullStack Academy of Code Hackathon 2015
```

## Usage

1.  Make sure that you have MongoDB installed correctly and running on your machine

    ```bash
    mongod
    ```
2. Serve the application with `grunt`

    ```bash
    grunt serve
    ```
     
### Testing
To run the test suite, run the following command:

```bash
grunt test
```

## Installation

1. Clone the repository

	```bash
	git clone https://github.com/Faisalnwz01/trait
	```
2.	Install dependencies

	```bash
	npm install    # installs node packages
	bower install  # installs bower dependencies
	```

__Note:__ If you encounter errors in the installation process for npm, it is recommended that you try running the install command with `sudo`



#### Features

-	Complete personality analysis of your Linkedin Profile
-	Complete personality analysis of Any Twitter hashtag or Twitter profile. 
-	Complete analysis of any text or book. Find out the personality of your favorite Author.

### Roadmap
- Plan to incoprate Google+ and Facebook for personality Analysis.

#### Known bugs

- Syntax highlighting doesn't work in safari
- Watson API take few seconds to give personality analysis back, casing the App to slow down a bit in the begining.

## Contributors
* __Faisal Nawaz__ - Project Lead [LinkedIn](https://www.linkedin.com/in/faisalnwz) | [GitHub](https://github.com/faisalnwz01)
* __Grant Chapman Schoffelen__ - Project Lead  [LinkedIn](https://www.linkedin.com/profile/view?id=365808666) | [GitHub](https://github.com/GrantSchoffelen)
## License

This projected is licensed under the terms of the [MIT license](/LICENSE)


