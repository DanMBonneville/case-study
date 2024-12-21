describe("this tests all user flows associated with this case study", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	describe("displays the bus routes for the first bus route option and direction (happy path)", () => {
		it("verifys the initial state of the app", () => {
			cy.findByTestId("route-select").find("input").should("be.enabled");
			cy.findByTestId("direction-select")
				.find("input")
				.should("not.be.enabled");
		});

		it("verifies that direction select is enabled after route selection", () => {
			cy.findByTestId("route-select").click();
			cy.findByText("METRO Blue Line").click();

			cy.findByTestId("direction-select").find("input").should("be.enabled");
		});

		it("verifies bus stops display after route and direction options are selected", () => {
			cy.findByTestId("route-select").click();
			cy.findByText("METRO Blue Line").click();
			cy.findByTestId("direction-select").click();
			cy.findByText("Northbound").click();

			cy.findByTestId("bus-stops-wrapper").should("be.visible");
			cy.findByTestId("bus-stops-wrapper")
				.children()
				.should("have.length.greaterThan", 1);
			cy.pause();
		});
	});
});
