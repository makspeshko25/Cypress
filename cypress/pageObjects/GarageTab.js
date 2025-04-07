class GaragePage {
    addCarButton = {
      addButton: () => cy.contains('button', 'Add car')
    };
  
    brandCarList = {
      brandAudi: () => cy.get('#addCarBrand').select('Audi'),
      brandBMW: () => cy.get('#addCarBrand').select('BMW')
    };
  
    audiModelList = {
      audiTT: () => cy.get('#addCarModel option').select('TT'),
      audiR8: () => cy.get('#addCarModel option').select('R8'),
      audiQ7: () => cy.get('#addCarModel option').select('Q7'),
      audiA6: () => cy.get('#addCarModel option').select('A6'),
      audiA8: () => cy.get('#addCarModel option').select('A8')
    };
  
    bmwModelList = {
      bmwSeries3: () => cy.get('#addCarModel option').select('3'),
      bmwSeries5: () => cy.get('#addCarModel').select('5'),
      bmwX5: () => cy.get('#addCarModel option').select('X5'),
      bmwX6: () => cy.get('#addCarModel option').select('X6'),
      bmwZ3: () => cy.get('#addCarModel option').select('Z3')
    };

    createModalButtons = {
        addButton: () => cy.get('.modal-footer').find('button.btn.btn-primary').contains('Add')
    }
    openCreateCarForm() {
      this.addCarButton.addButton().click();
    }

    selectBmwBrand() {
      this.brandCarList.brandBMW();
    }
    selectBmwSeries5Model(){
        this.bmwModelList.bmwSeries5();
    }
    enterMileage(){
        cy.get('#addCarMileage').type(150000);
    }
    saveNewVehicle(){
        this.createModalButtons.addButton().click({ force: true });
    }
  }
  
  export default new GaragePage();