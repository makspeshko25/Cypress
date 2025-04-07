class ExpensesPage {
    mainPageElements = {
        modelsDropdown: () => cy.get('#carSelectDropdown').click(),
        modelsOptions: () => cy.get('li.car-select-dropdown_item').contains('BMW 3'),
        createExpense: () => cy.get('div > div:first-child > div > button').contains('Add an expense')
    };
    createModalElements = {
        vehicleList: () => cy.get('select[name="carId"]').select('BMW 3'),
        reportDate: () => cy.get('#addExpenseDate'),
        mileageField: () => cy.get('#addExpenseMileage'),
        litersField: () => cy.get('#addExpenseLiters'),
        totalCostField: () => cy.get('#addExpenseTotalCost'),
        addButton: ()=> cy.get('.modal-content').find('button.btn.btn-primary').contains('Add')
    }
    selectVehicle (){
        this.mainPageElements.modelsDropdown();
        this.mainPageElements.modelsOptions().click();
    }
    clickOnCreate (){
        this.mainPageElements.createExpense().click();
    }
    fillInForm (){
        this.createModalElements.vehicleList();
        this.createModalElements.reportDate().clear();
        this.createModalElements.mileageField().clear();
        this.createModalElements.reportDate().type('07.04.2025');
        this.createModalElements.mileageField().type('2500');
        this.createModalElements.litersField().type('5');
        this.createModalElements.totalCostField().type('450');
        this.createModalElements.addButton().click({force:true});
    }
}
export default new ExpensesPage();