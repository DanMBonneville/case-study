/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('selectBusRoute', (route: string) => {
  cy.findByTestId('route-select')
    .find('input')
    .first()
    .should('be.enabled')
    .click();
  cy.findByText(route).click();
});

Cypress.Commands.add('selectRouteDirection', (direction: string) => {
  cy.findByTestId('direction-select').click();
  cy.findByText(direction).click();
});

Cypress.Commands.add(
  'selectRouteAndDirection',
  (route: string, direction: string) => {
    cy.selectBusRoute(route);
    cy.selectRouteDirection(direction);
  }
);

Cypress.Commands.add('clearRouteSelection', () => {
  cy.findByTestId('route-select')
    .find('svg')
    .first()
    .should('be.visible')
    .click({ force: true });
});

Cypress.Commands.add('clearDirectionSelection', () => {
  cy.findByTestId('direction-select')
    .find('svg')
    .first()
    .click({ force: true });
});

Cypress.Commands.add(
  'getBusStopsForRouteAndDirection',
  (route: string, direction: string) => {
    cy.selectBusRoute(route);
    cy.selectRouteDirection(direction);
    cy.findByTestId('bus-stops-list', { timeout: 10000 })
      .find('.bus-stop-list-item p')
      .then(($pElements) => {
        return Cypress.$.map($pElements, (el) => (el as HTMLElement).innerText);
      });
  }
);

Cypress.Commands.add(
  'verifyStringArraysAreDisjoint',
  (arr1: string[], arr2: string[]) => {
    arr1.forEach((arr1Element: string) => {
      arr2.forEach((arr2Element: string) => {
        cy.wrap(arr1Element).should('not.equal', arr2Element);
      });
    });
  }
);

declare global {
  namespace Cypress {
    interface Chainable {
      selectBusRoute(route: string): Chainable<void>;
      selectRouteDirection(direction: string): Chainable<void>;
      selectRouteAndDirection(
        route: string,
        direction: string
      ): Chainable<void>;
      clearRouteSelection(): Chainable<void>;
      clearDirectionSelection(): Chainable<void>;
      getBusStopsForRouteAndDirection(
        route: string,
        direction: string
      ): Chainable<string[]>;
      verifyStringArraysAreDisjoint(
        arr1: string[],
        arr2: string[]
      ): Chainable<void>;
    }
  }
}
