/// <reference types = "Cypress"/>

import LoginPage from '../PageObject/loginPage'
import CommonFunc from '../CommonFunctions/commonFunc' 

describe('Test Suite - Login Cases', () {
    beforeEach(() => {
        // now this runs prior to every test
        // across all files no matter what
        const newSession = new CommonFunc()
        newSession.clearSession()
      })

    it('Valid login case', () {
        const loginCase = new LoginPage()
        loginCase.visit()
        loginCase.fillEmail('binh@mission.plus')
        loginCase.fillPassword('spares@externalresource')
        loginCase.selectCheckbox()
        loginCase.submit()
        cy.title().should('be.equal', 'PROPELLER Shore')
        cy.xpath('//h1', {timeout: 10000}).contains('Dashboard Overview').should('be.visible')
    })

    it.skip('Login with not existed email address', () {
        const loginCase = new LoginPage()       
        loginCase.visit()
        loginCase.fillEmail('lan0000@mission.plus')
        loginCase.fillPassword('spares@externalresource')
        loginCase.selectCheckbox()
        loginCase.submit()
        cy.get('.MuiAlert-message', {timeout: 10000}).contains('Authorization Error. Invalid Username/ Password.').should('be.visible')
    })

    it.skip('Login with invalid email and password', () {
        const loginCase = new LoginPage()       
        loginCase.visit()
        loginCase.fillEmail('lan0000@mission.plus')
        loginCase.fillPassword('spares1111@externalresource')
        loginCase.selectCheckbox()
        loginCase.submit()
        cy.get('.MuiAlert-message', {timeout: 10000}).contains('Authorization Error. Invalid Username/ Password.').should('be.visible')
    })

    it.skip('Login with empty email', () {
        const loginCase = new LoginPage()       
        loginCase.visit()
        loginCase.fillPassword('spares@externalresource')
        loginCase.selectCheckbox()
        loginCase.submit()
        // var errorMess: string = cy.get('[id=username-helper-text]', {timeout: 10000})
        // expect(errorMess).to.have.string('Username is required.')
        cy.get('[id=username-helper-text]', {timeout: 10000}).should('have.text', 'Username is required.')
    })

    it.skip('Login with empty password', () {
        const loginCase = new LoginPage()       
        loginCase.visit()
        loginCase.fillEmail('lan0000@mission.plus')
        loginCase.selectCheckbox()
        loginCase.submit()
        // var errorMess: string = cy.get('[id=username-helper-text]', {timeout: 10000})
        // expect(errorMess).to.have.string('Username is required.')
        cy.get('[id=password-helper-text]', {timeout: 10000}).should('have.text', 'Password is required.')
    })

    it('Login with empty email and password', () {
        const loginCase = new LoginPage()       
        loginCase.visit()
        loginCase.selectCheckbox()
        loginCase.submit()
        // var errorMess: string = cy.get('[id=username-helper-text]', {timeout: 10000})
        // expect(errorMess).to.have.string('Username is required.')
        cy.get('[id=username-helper-text]', {timeout: 10000}).should('have.text', 'Username is required.')
        cy.get('[id=password-helper-text]', {timeout: 10000}).should('have.text', 'Password is required.')
    })

})
