import GaragePage from '../../pageObjects/GarageTab';

describe('Create vehicle flow', () => {
    beforeEach(() => {
      cy.loginAsGuest();
      cy.login(); 
    });
  
    it('Create Audi vehicle', () => {
        GaragePage.openCreateCarForm();
        cy.wait(1000);
        GaragePage.selectBmwBrand();
        cy.wait(1000);
        GaragePage.enterMileage();
        cy.wait(1000);
        GaragePage.saveNewVehicle();
    });
  });