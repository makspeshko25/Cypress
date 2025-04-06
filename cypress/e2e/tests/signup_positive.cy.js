import signUpModal from '../../pageObjects/SignUpModalPage';

describe('Sign up with valid data flow', () => {
    beforeEach(function () {  
        cy.loginAsGuest();
        cy.fixture('validSignupData').then((data) => {
            this.validData = data.validUser; 
        });
    });

    it('should successfully sign up and be redirected to the garage page', function () {
        cy.log('Valid signup data:', this.validData);
        
        // Fill and submit the signup form
        signUpModal.fillInValidForm(this.validData);

        // Verify redirection
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    });
});