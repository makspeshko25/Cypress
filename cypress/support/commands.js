Cypress.Commands.add('loginAsGuest', () => {
    cy.visit('/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off the default logging
      options.log = false;
      
      // create a custom log with masked password
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      });
    }
  
    // execute the original type function
    return originalFn(element, text, options);
  });

  Cypress.Commands.add('login', (email, password) => {
    const finalEmail = email || Cypress.env('defaultUserEmail');
    const finalPassword = password || Cypress.env('defaultUserPassword');
  
    const loginModalElements = {
      headerLoginButton: () => cy.get('button.btn.btn-outline-white.header_signin').filter(':contains("Sign In")'),
      emailField: () => cy.get('#signinEmail'),
      passwordField: () => cy.get('#signinPassword'),
      loginButton: () => cy.contains('button', 'Login'),
    };
  
    loginModalElements.headerLoginButton().click();
    loginModalElements.emailField().type(finalEmail);
    loginModalElements.passwordField().type(finalPassword, { sensitive: true });
    loginModalElements.loginButton().click();
  });

  Cypress.Commands.add('navigateToExpenses', () => {
    cy.get('a[href="/panel/expenses"]').contains('Fuel expenses').click();
  });