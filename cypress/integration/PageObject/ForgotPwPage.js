/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class ForgotPassword
{
    elements= {
        emailField: () => cy.get('input[id="username"]'),
        resetPasswordButton: () => cy.get('.MuiButton-label').contains('Reset Password'),
        errorMessLocator: () => cy.get('[id=username-helper-text]'),
        errorPopupLocator: () => cy.get('.MuiAlert-message')
    }
    fillEmail(value) {
        //cy.get('input[id="username"]').type(value)
        // const emailField = cy.get('input[id="username"]')
        this.elements.emailField().clear();
        this.elements.emailField().type(value);
    }

    submit(){    
        // const signInButton = cy.get('.MuiButton-label').contains('Reset Password')
        this.elements.resetPasswordButton().click();
    }

    loginFunction(username, password){
        cy.visit()
        this.fillEmail(username)
        this.ForgotPassword(password)
        this.submit()
    }

    checkErrorMess(errorMessage){
        // const errorMessLocator = cy.get('[id=username-helper-text]')
        this.elements.errorMessLocator().contains(errorMessage);
    }

    checkErrorPopup(errorMessage){
        this.elements.errorPopupLocator().contains(errorMessage, {timeout: 10000});
    }
}
export default ForgotPassword