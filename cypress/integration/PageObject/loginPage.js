/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class LoginPage
{
    visit(){
        cy.visit("https://onshore.dev.sparescnx.com/")
    }

    fillEmail(value) {
        //cy.get('input[id="username"]').type(value)
        const emailField = cy.get('input[id="username"]')
        emailField.clear()
        emailField.type(value)
    }

    fillPassword(value){
        const pwField = cy.get('[id=password]')
        pwField.clear()
        pwField.type(value)
    }

    selectCheckbox(){
        //cy.xpath('//input[@type="checkbox"]').check().should('be.checked')
        const checkbox = cy.xpath('//input[@type="checkbox"]')
        checkbox.check()
        checkbox.should('be.checked')
    }

    submit(){
        //cy.get('.MuiButton-label').contains('Log in').click()
        const signInButton = cy.get('.MuiButton-label').contains('Log in')
        signInButton.click()
    }

    loginFunction(username, password){
        cy.visit('')
        this.fillEmail(username)
        this.fillPassword(password)
        this.selectCheckbox()
        this.submit()
    }

}
export default LoginPage