import { cy } from 'cypress';

describe("this tests all user flows associated with this case study", () => {
	beforeEach(() => {
		cy.visit("https://localhost:3000");
	});

	it("displays two todo items by default", () => {
		// cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
	});

});
