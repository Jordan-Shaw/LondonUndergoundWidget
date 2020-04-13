
# London Underground Line Checker
## Background

This app was made using React. I designed it with the aesthetic of the underground in mind, from a mobile-first perspective.<br>

A hosted version of the app can be seen [here](https://secure-forest-16460.herokuapp.com/).

My intitial wireframes can be seen [here](https://www.figma.com/file/YbsUyRm0WzwHOmSRW0C8uj/London-Underground?node-id=0%3A1).

The app handles data served from the [Transport for London Unified API](https://api.tfl.gov.uk/).

I completed this project as part of a tech test, but may continue to work on it. If so, I will:
 - Work on smoothing out the animations on mobile.
 - Make some dynamic loading spinners, as opposed to the generic text which is currently used to indicate loading. 
  -  Improve the look of the landing page, which feels bare at the moment. 
   - Programmatically alter the SVG logo so that its text reflects which line is being viewed on the SingleLine page, instead of saying 'Travel widget' as it does now.

## Getting Started
### Prerequisites
This project needs [node](https://nodejs.org/en/) (v12) and [npm](https://www.npmjs.com/get-npm) to run locally. Install if necessary

### Installing
1. Fork this repo and clone it onto your machine.
```bash
git clone 'https://github.com/${username}/LondonUndergoundWidget.git
cd underground
```
2. Run the following command in your terminal to install the project's dependencies:
```bash
npm install
```
3. Run the start script
```bash
npm start
```
This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests

The utility function tests can be ran by running the script:

```bash
npm test-utils
```




