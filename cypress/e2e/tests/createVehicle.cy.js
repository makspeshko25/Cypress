import GaragePage from '../../pageObjects/GarageTab';

describe('Create vehicle flow', () => {
    beforeEach(() => {
      cy.loginAsGuest();
      cy.login(); 
    });
  
    it('Create Audi vehicle', () => {
        GaragePage.openCreateCarForm();
        GaragePage.selectBmwBrand();
        GaragePage.enterMileage();
        GaragePage.saveNewVehicle();
    });
  });