class CurrencySettingsPage{

    getCurrencyDropDownList(){
        return cy.get('span[data-action="a-dropdown-button"]');
    }

    getSelectGivenCurrencyFromList(txt){
        return cy.get('li[class="a-dropdown-item"] a[class="a-dropdown-link"]').contains(txt)
    }

    getCurrencySaveBtn(){
        return cy.get('input[class="a-button-input"]');
    }
}

export default CurrencySettingsPage;