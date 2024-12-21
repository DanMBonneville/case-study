describe('this tests all user flows associated with this case study', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('displays the bus routes for the first bus route option and direction (happy path)', () => {
    it('verifys the initial state of the app', () => {
      cy.findByTestId('route-select').find('input').should('be.enabled');
      cy.findByTestId('direction-select')
        .find('input')
        .should('not.be.enabled');
    });

    it('verifies that direction select is enabled after route selection', () => {
      cy.findByTestId('direction-select')
        .find('input')
        .should('exist')
        .should('not.be.enabled');

      cy.selectBusRoute('METRO Blue Line');

      cy.findByTestId('direction-select')
        .find('input')
        .should('exist')
        .should('be.enabled');
    });

    it('verifies bus stops display after route and direction options are selected', () => {
      cy.selectRouteAndDirection('METRO Blue Line', 'Northbound');

      cy.findByTestId('bus-stops-wrapper')
        .should('be.visible')
        .children()
        .should('have.length.greaterThan', 1);
    });
  });

  describe('verifies the state of the application after further user interaction', () => {
    it('verifys clearing route selection disables direction selector and bus stop display', () => {
      cy.selectRouteAndDirection('METRO Blue Line', 'Northbound');
      cy.clearRouteSelection();

      cy.findByTestId('route-select')
        .find('input')
        .should('exist')
        .should('be.enabled');

      cy.findByTestId('direction-select')
        .find('input')
        .should('exist')
        .should('not.be.enabled');

      cy.findByTestId('bus-stops-wrapper')
        .should('not.be.visible')
        .children()
        .should('have.length', 0);
    });

    it('verifys changing route selection clears direction selection', () => {
      cy.selectRouteAndDirection('METRO Blue Line', 'Northbound');
      cy.selectBusRoute('Route 615');

      cy.findByTestId('direction-select')
        .find('input')
        .should('exist')
        .should('be.enabled')
        .invoke('val')
        .then((inputValue) => {
          cy.wrap(inputValue).should('equal', '');
        });

      cy.findByTestId('bus-stops-wrapper')
        .should('not.be.visible')
        .children()
        .should('have.length', 0);
    });

    it('verifys clearing direction selection removes bus stop display', () => {
      cy.selectRouteAndDirection('METRO Blue Line', 'Northbound');
      cy.clearDirectionSelection();

      cy.findByTestId('route-select')
        .find('input')
        .should('exist')
        .should('be.enabled');

      cy.findByTestId('direction-select')
        .find('input')
        .should('exist')
        .should('be.enabled');

      cy.findByTestId('bus-stops-wrapper')
        .should('not.be.visible')
        .children()
        .should('have.length', 0);
    });

    it('verifies clearing direction selection and selecting new values displays only new bus stops', () => {
      cy.getBusStopsForRouteAndDirection('METRO Blue Line', 'Northbound').then(
        (busStopsForRouteAndDirectionMetroBlueNorth: string[]) => {
          cy.getBusStopsForRouteAndDirection('Route 615', 'Eastbound').then(
            (busStopsForRouteAndDirection615East: string[]) => {
              cy.verifyStringArraysAreDisjoint(
                busStopsForRouteAndDirectionMetroBlueNorth,
                busStopsForRouteAndDirection615East
              );
            }
          );
        }
      );
    });
  });
});
