import LoginTest from "../pages/logPages"
 
 const login = new LoginTest()
  let username = "test"
  let password = "test"
  let invalidUsername = "invalidtest"
  let invalidPassword = "invalidtest"
  let userDoesNotExist = "User does not exist."
  let wrongPassword = "Wrong password."
  let pleaseFillOut = "Please fill out Username and Password."
 

 describe("Go to Site", () => {
   beforeEach(() => {
     login.visit()

    })
     
   it("should Log In and Log out", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginUsername().type(username)
      login.getLoginPassword().type(password)
      login.getLoginButton().click()
      cy.wait(3000)
      login.getUserLogged().then(($userLogged) => 
          {
            const userLoggedIn = $userLogged.text()
            cy.log(userLoggedIn)
            expect(userLoggedIn).to.contain('Welcome ' + username)
          })
      login.getLogoutHeader().click()
  })
  it("should Log in with invalid credentials", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginUsername().type(invalidUsername)
      login.getLoginPassword().type(invalidPassword)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(unregisteredUser)=>{
        expect(unregisteredUser).to.contains(userDoesNotExist);
      })
    })
    it("should Log in with invalid username", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginUsername().type(invalidUsername)
      login.getLoginPassword().type(password)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(unregisteredUser)=>{
        expect(unregisteredUser).to.contains(userDoesNotExist);
      })
    })
    it("should Log in with invalid password", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginUsername().type(username)
      login.getLoginPassword().type(invalidPassword)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(unregisteredUser)=>{
        expect(unregisteredUser).to.contains(wrongPassword);
      })
    })
        it("should Log in with invalid username", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginUsername().type(invalidUsername)
      login.getLoginPassword().type(password)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(unregisteredUser)=>{
        expect(unregisteredUser).to.contains(userDoesNotExist);
      })
    })
    it("should Log in with missing username", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginPassword().type(password)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(missingUsername)=>{
        expect(missingUsername).to.contains(pleaseFillOut);
      })
    })
    it("should Log in with missing password", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginUsername().type(username)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(missingPassword)=>{
        expect(missingPassword).to.contains(pleaseFillOut);
      })
    })
    it("should Log in with missing username and password", () => {
      
      login.getLoginHeader().click()
      cy.wait(3000)
      login.getLoginButton().click()
      cy.wait(1000)
      cy.on('window:alert',(missingUsernamePassword)=>{
        expect(missingUsernamePassword).to.contains(pleaseFillOut);
      })
    })

})




