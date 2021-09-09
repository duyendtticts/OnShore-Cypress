/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class VerifyFunction{
    elements = {
        headerLocator: () => cy.get('[data-testid="content-dashboard-id"]').find('h1'),
        tileLocator: () => cy.get('h6'),

    }


    verifyHeaderText(headerText) {
        this.elements.headerLocator().should('contain.text', headerText)
    }
    verifyTileText(tileText) {
        this.elements.tileLocator().contains(tileText).should('be.visible')
    }
    
}

export default VerifyFunction