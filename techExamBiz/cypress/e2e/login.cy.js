import LoginTest from "../pages/logPages"
 
 const login = new LoginTest()
  let username = "test"
  let password = "test"
  
 

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
    login.getLoginUsername().type(userID(), {force: true})
    login.getLoginPassword().type(password)
    login.getLoginButton().click()
    cy.wait(3000)

})



})


