# NextTrip Case Study

This is a web application that displays Minneapolis Metro Transit bus line information
based on APIs available via Metro Transit NextTrip API

- **Technologies**: TypeScript, React, Redux, React Router, Axios, Sass, Cypress, Jest

## Steps to run the application

1. Install Node (Skip if you already have Node.js)

Download and install Node.js from the [official website](https://nodejs.org/en)

2. Verify Node.js Installation

```
node -v
npm -v
```

2. Navigate to rhe project directory

```
cd ${workspace}/case-study
```

3. Install project dependencies

```
npm install
```

4. Run the application

```
npm start
```

## Steps to test the application

### Running Jest unit tests

```
npm test
```

run all tests

```
a
```

### Running Cypress e2e testing

We have the ability to run cypress in the **browser** or in **headless** mode (in the terminal without a browser)

**Note**: the application must be running in a seperate terminal or process on port 3000

Navigate to rhe project directory and start application

```
cd ${workspace}/case-study
npm run start
```

Open a new command prompt or powershell, navigate to the same directory

```
cd ${workspace}/case-study
```

Run Cypress e2e tests in Headless mode

```
npm run runCypress
```

Run Cypress e2e tests on the browser

```
npm run openCypress
```

1. Click E2E Testing
2. Chose your favorite browser
3. Click "Start E2E Testing in [Browser]"
4. Click test-all-scenarios.cy.ts (Specs tab, cypress/e2e folder)
5. Watch automated tests run! Checkout the state of the application at each step with the [time traveling](https://docs.cypress.io/app/core-concepts/open-mode#Time-traveling) feature

## Assumptions made during development

### API assumptions

1. The provided api is stable and reliable
2. The Api has no rate limit
3. The api has proper error handling

### Frontend assumptions

1. Typescript is an appropriate language for this task
2. I asuumed that React would be a proper framework based on the industry standard repuatation that many people have for that framework
3. I assumed that browser back and forth buttons would take you to and away this page based on simplicity
4. I assumed that the users previous state could be maintained through redux persist when navigating to and from the application in the same browser
5. I assumed that displaying the names of the stops would be sufficient for this case study
6. I assumed that disabling the select boxes instead on hiding the display when necessary would provide a clean user experience
7. I assumed that managing the state with a modern Redux pattern would be the best approach for handling state and API responses

### Testing assumptions

1. I assumed that Jest is a suitable tool for unit testing the components
2. I assumed that E2E tests would provide a stronger demonstration of my technical abilities
3. I assumed that Cypress is the best tool for conducting E2E testing

### General assumptions

1. I assumed that I could complete this project 24 hours before the case study interview despite the weekedn overlapping with that timeframe
2. I assumed that the case study could be conducted on a Mac machine
3. I assumed that the application could be displayed and demoed on localhost
4. I assumed that Docker would be unnecessary (although it could be easily implemented)
