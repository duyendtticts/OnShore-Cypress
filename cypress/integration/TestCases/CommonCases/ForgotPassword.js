/// <reference types = "Cypress"/>

import ForgotPassword from '../../PageObject/ForgotPwPage'
// import CommonFunc from '../CommonFunctions/commonFunc' 
describe("Test Suite - Forgot Password", function(){
    const forgotPwCase = new ForgotPassword()
    beforeEach(() => {
        cy.visit("https://onshore.dev.sparescnx.com/forgot-password")
    })

    it("case1: empty email", (){
        forgotPwCase.submit()
        forgotPwCase.checkErrorMess('Username is required.')
    })

    it("case2: incorrect format email - lack of @", (){
        forgotPwCase.fillEmail('lanmission.plus')
        forgotPwCase.submit()
        forgotPwCase.checkErrorMess('Invalid email')
    })

    it("case3: incorrect format email - lack of domain", (){
        forgotPwCase.fillEmail('lan@missionplus')
        forgotPwCase.submit()
        forgotPwCase.checkErrorMess('Invalid email')
    })

    it("case4: not existed on system", (){
        forgotPwCase.fillEmail('lan@missionplus.com')
        forgotPwCase.submit()
        forgotPwCase.checkErrorPopup('Unable to send email')
    })
})