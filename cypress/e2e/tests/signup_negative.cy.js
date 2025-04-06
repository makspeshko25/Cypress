import signUpModal from '../../pageObjects/SignUpModalPage';

describe('Sign up with valid data flow', () => {
    beforeEach(function () {  
        cy.loginAsGuest();
        cy.fixture('invalidSignupData').then((data) => {
            this.invalidData = data; 
        });
    });
    it('the validation should be triggered', function () {
        signUpModal.fillInInValidForm(this.invalidData);
        signUpModal.invalidFormValidation();
    });

});