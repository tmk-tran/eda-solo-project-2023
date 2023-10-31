# Project Title

Welcome to ScoreMark! 

ScoreMark is a range tool, designed to help target shooters track their shooting performance and improve their skills on the range.

Some features:
- Record and store your shooting scores
- Track your progress over time
- View analysis of your shooting performance
- Record notes/goals to further measure your improvement

### Authors
*** T Mark Schisel *** - Author

## Getting Started

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installing

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* JavaScript
* React
* Node
* CSS
* Material UI
* animate.css
* SweetAlerts
* Javascript

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to https://css-generators.com/starburst-shape/ for the CSS generator and assisting with creating the animations in the Results commponent of this project
* Emerging Digital Academy, for teaching me the skills to create this project

## Dependencies
* npm install js-cookie
* Material UI
* Material UI x-charts
* A full list of dependencies can be found in `package.json`