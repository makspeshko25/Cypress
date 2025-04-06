
class signUpModal {
    signUpSelectors={
        signUpButton: ()=> cy.contains('button', 'Sign up'),
        nameField: ()=> cy.get('#signupName'),
        lastNameField: ()=> cy.get('#signupLastName'),
        emailField: ()=>cy.get('#signupEmail'),
        passwordField: ()=>cy.get('#signupPassword'),
        passwordConfirmField: ()=>cy.get('#signupRepeatPassword'),
        registerButton: ()=> cy.contains('button','Register'),
        modalFooter: () => cy.get('.modal-footer')
    }
    validationSelectors={
        nameValidationText: ()=> cy.contains('p', 'Name has to be from 2 to 20 characters long'),
        lastNameValidationText: ()=> cy.contains('p', 'Last name has to be from 2 to 20 characters long'),
        emailValidationText: ()=> cy.contains('p', 'Email is incorrect'),
        passwordValidationText: () =>
            cy.get('#signupPassword')
            .parent()
            .find('.invalid-feedback p')
            .contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'),
        confirmPasswordValidationText: () => 
            cy.get('#signupRepeatPassword')
              .parent()
              .find('.invalid-feedback p')
              .contains('Passwords do not match')
    
    }
    fillInValidForm(validSignupData){
        this.signUpSelectors.signUpButton().click();
        cy.wait(1000);
        this.signUpSelectors.nameField().type(validSignupData.name);
        this.signUpSelectors.lastNameField().type(validSignupData.lastName);
        this.signUpSelectors.emailField().type(validSignupData.email);
        this.signUpSelectors.passwordField().type(validSignupData.password);
        this.signUpSelectors.passwordConfirmField().type(validSignupData.password);
        this.signUpSelectors.registerButton().click();
    }
    fillInInValidForm(invalidSignupData) {
        this.signUpSelectors.signUpButton().click();
        cy.wait(1000);
    
        // Select a random invalid name (either too short or too long)
        const randomInvalidName = Math.random() < 0.5
            ? invalidSignupData.invalidNames.tooShort
            : invalidSignupData.invalidNames.tooLong;
    
        // Select a random invalid email from the available keys
        const invalidEmailKeys = Object.keys(invalidSignupData.invalidEmails);
        const randomInvalidEmail = invalidSignupData.invalidEmails[
            invalidEmailKeys[Math.floor(Math.random() * invalidEmailKeys.length)]
        ];
    
        // Select a random invalid password
        const invalidPasswordKeys = Object.keys(invalidSignupData.invalidPasswords);
        const randomInvalidPassword = invalidSignupData.invalidPasswords[
            invalidPasswordKeys[Math.floor(Math.random() * invalidPasswordKeys.length)]
        ];
    
        // Use mismatching passwords
        const mismatchedPassword = invalidSignupData.passwordMismatch.reenterPassword;
    
        // Fill the form with invalid data
        this.signUpSelectors.nameField().type(randomInvalidName);
        this.signUpSelectors.lastNameField().type(randomInvalidName);
        this.signUpSelectors.emailField().type(randomInvalidEmail);
        this.signUpSelectors.passwordField().type(randomInvalidPassword);
        this.signUpSelectors.passwordConfirmField().type(mismatchedPassword);  
        this.signUpSelectors.modalFooter().click();
    
        // Validate that the error messages are displayed
        this.validationSelectors.nameValidationText().should('be.visible');
        this.validationSelectors.lastNameValidationText().should('be.visible');
        this.validationSelectors.emailValidationText().should('be.visible');
        this.validationSelectors.passwordValidationText().should('be.visible');
        this.validationSelectors.confirmPasswordValidationText().should('be.visible');
    }
    invalidFormValidation(){
        // Validate that the error messages are displayed
        this.validationSelectors.nameValidationText().should('be.visible');
        this.validationSelectors.lastNameValidationText().should('be.visible');
        this.validationSelectors.emailValidationText().should('be.visible');
        this.validationSelectors.passwordValidationText().should('be.visible');
        this.validationSelectors.confirmPasswordValidationText().should('be.visible');
    }
}

export default new signUpModal();