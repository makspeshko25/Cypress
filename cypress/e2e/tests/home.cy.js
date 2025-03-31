import HomePage from '../../pageObjects/HomePage';

describe('Home Page Elements Test', () => {
    beforeEach(() => {
        cy.loginAsGuest();
    });

    it('should display all required elements in header section', () => {
        HomePage.verifyHeaderElements();
    });
    it('should display all required elements in footer section', () => {
        HomePage.verifyFooterElements();
    });
});