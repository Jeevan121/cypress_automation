class BaseTest{
    launchApplication(){
        return cy.visit(Cypress.env('url'));
    }
}

export default BaseTest;