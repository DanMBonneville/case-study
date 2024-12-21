/// <reference types="cypress" />

import "@testing-library/cypress/add-commands";

// Cypress.Commands.add("selectRouteAndDirection", (params: any) => {
// 	cy.findByTestId("route-select").click();
// 	cy.findByText(params.route).click();
// 	cy.findByTestId("direction-select").click();
// 	cy.findByText(params.direction).click();
// });

// Cypress.Commands.add("customCommand", (param: string) => {
// 	cy.log(`Custom command with param: ${param}`);
// });

// declare global {
// 	namespace Cypress {
// 		interface Chainable {
// 			selectRouteAndDirection(
// 				route: string,
// 				direction: string
// 			): Chainable<void>;
// 			// drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// 			// dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// 			// visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
// 		}
// 	}
// }
