class LoginTest {
    constructor() {
      this.url = "https://www.demoblaze.com/index.html"
      this.title = "LoginTest" 
    }
   
    visit() {
      cy.visit(this.url)
    }
    getLoginHeader() {
      return cy.get('#login2')
    }
    getLoginUsername() {
      return cy.get('#loginusername')
    }
    getLoginPassword() {
      return cy.get('#loginpassword')
    }
    getLoginButton() {
      return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
    getLogoutHeader() {
      return cy.get('#logout2')
    }
    getUserLogged() {
      return   cy.get('#nameofuser')
    }
}
module.exports = LoginTest