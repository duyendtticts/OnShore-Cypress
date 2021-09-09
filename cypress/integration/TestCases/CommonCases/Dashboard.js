/// <reference types = "Cypress"/>

import LoginPage from '../../PageObject/loginPage'
import CommonFunc from '../../CommonFunctions/commonFunc' 
import VerifyFunction from '../../CommonFunctions/VerifyFunction.spec'

describe('Test Suite: Dashboard', () {
    beforeEach( ()=>{
        const loginCase = new LoginPage()
        
        loginCase.loginFunction('binh@mission.plus', 'spares@externalresource')
        cy.wait(10000)
        //close help sign popup
        
    } )
    it('Case: Check the dashboard header and tile text', () {
        const closeHelpPopUp = new CommonFunc()
        closeHelpPopUp.closeHelperPopup()

        const checkHeader = new VerifyFunction()
        checkHeader.verifyHeaderText('Dashboard Overview')

        const checkTileText = new VerifyFunction()
        checkTileText.verifyTileText('Low Critical Spares')
        checkTileText.verifyTileText('POs Pending Delivery')
        checkTileText.verifyTileText('Parts to Restock')
        checkTileText.verifyTileText('Pending Check In')

        

    })
})