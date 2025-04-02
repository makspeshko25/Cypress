describe('Sign up with valid data flow', () => {
    beforeEach(function () {  
        cy.loginAsGuest();
        cy.fixture('validSignupData').then((data) => {
            this.validData = data.validUser; // Store correct fixture data
        });
    });

    it('should successfully sign in', function () {
        cy.login(this.validData.email, this.validData.password); // Use correct variable

        // Verify redirection
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    });
});