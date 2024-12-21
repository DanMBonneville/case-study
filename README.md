# NextTrip Case Study

This is a web application that displays Minneapolis Metro Transit bus line information
based on APIs available via Metro Transit NextTrip API

- **Technologies**: TypeScript, React, Redux, React Router, Axios, Sass, Cypress, Jest

## Steps to build and run the application (mac)

Install Homebrew: https://brew.sh/

Install Node

```
brew install node
```

Install project dependencies

```
cd ${project_location};
npm install;
npm run build;
```

Run the application

```
npm run start
```

## Steps to test application (mac)

### Running Jest unit tests

```
npm run test
```

run all tests

```
a
```

### Running Cypress e2e testing

We have the ability to run cypress in the browser or in "headless" mode

Headless

```
npm run runCypress
```

Browser

```
npm run openCypress
```

1. Click E2E Testing
2. Chose your favorite browser
3. Click "Start E2E Testing in [Browser]"
4. Click "test-all-scenarios.cy.ts" (Specs tab, cypress/e2e folder)
5. Watch automated tests run! Checkout the state of the application at each step by browsing on the "time travel" feature https://docs.cypress.io/app/core-concepts/open-mode#Time-traveling

## Assumptions made during development

### API assumptions

1. I assumed that the provided api was stable and reliable
2. I assumed that there was no rate limit calling the API
3. I assumed that the api had proper error handling

### Frontend assumptions

1. I assumed that typescript would be the best example of my technical ability based on the job description
2. I assumed that React would be a proper framework based on the industry standard reputation that many people have for that framework
3. I assumed that browser back and forth buttons would take you to and away this page based on simplicity
4. I assumed that the user's previous state could be maintained through redux persist when navigating to and from the application in the same browser
5. I assumed that displaying the names of the stops would be sufficient for this case study
6. I assumed that disabling the select boxes instead of hiding the display when necessary would provide a clean user experience
7. I assumed that managing the state with a modern Redux pattern would be the best approach for handling state and API responses

### Testing assumptions

1. I assumed that Jest was suitable for unit testing the components
2. I assumed that E2E tests would provide a stronger demonstration of my technical abilities
3. I assumed that Cypress is the best tool for conducting E2E testing

### General assumptions

1. I assumed that I could complete this project 24 hours before the case study interview despite the weekend overlapping with that timeframe
2. I assumed that the case study could be conducted on a Mac devise
3. I assumed that the application could be displayed and demoed on localhost environment
4. I assumed that Docker was unnecessary but could have been implemented if needed
