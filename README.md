# NextTrip Case Study

This is a web application that displays Minneapolis Metro Transit bus line information
based on APIs available via Metro Transit NextTrip API

- **Technologies**: TypeScript, React, Redux, React Router, Axios, Sass, Cypress, Jest

## Steps to run the application

1. Install Node (Skip if you already have Node.js)

Download and install Node.js from the [official website](https://nodejs.org/en)

2. Verify Node.js Installation

Open a new command prompt or powershell and execute commands

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

1. TypeScript with React is a suitable choice for this task

2. Browser back and forth buttons take you to and from this single page application maintaining state within the browser

3. Displaying just the names of the bus stops is sufficient after route and direction selection based on the requirements

4. Disabling the select boxes instead on hiding the display when necessary - as the [provided example](https://www.metrotransit.org/nextrip) website functions - provides a clean user experience

5. Managing the state with a modern Redux pattern would be the best approach for handling state and API responses

6. User feedback in for application **loading** state is important for the user experience

7. Utilizing "Target Red" #cc0000 and metro transit blue #0053a0 is an appropriate styling combination

### Testing assumptions

1. Unit and e2e testing is sufficient for this project

2. Jest is a suitable tool for unit testing

3. Cypress e2e testing is a strong choice for this project

### General assumptions

1. The application could be displayed and demonstated on localhost

2. Containerizing the application is unnecessary, although possible

3. Added infrustructure such as "combineReducers" in store.tsx, "lazy", and App.tsx, and "PersistGate" in the index.tsx, although not exactly necessary for this case study, displays scalability in the application
