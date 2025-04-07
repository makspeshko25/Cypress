import ExpensesTab from '../../pageObjects/ExpensesTab';

describe('Create expenses flow', () => {
    beforeEach(() => {
      cy.loginAsGuest();
      cy.login();
      cy.wait(3000);
      cy.navigateToExpenses();
    });
  
    it('Create expenses for BMW', () => {
        ExpensesTab.selectVehicle();
        ExpensesTab.clickOnCreate();
        ExpensesTab.fillInForm();
    });
  });