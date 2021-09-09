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
    
    
    
    })