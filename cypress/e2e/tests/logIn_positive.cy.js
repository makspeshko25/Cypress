
describe('Sign in process', () => {
  beforeEach(() => {
    cy.loginAsGuest(); 
  });

  it('should successfully sign in with valid credentials', () => {
    cy.login();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/panel/garage`);
  });
});
