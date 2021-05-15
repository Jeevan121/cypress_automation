class AccountPage{

    getAccountLink(){
        return cy.get('div[id="nav-al-your-account"] span[class="nav-text"]').contains('Account');
    }

    getDefaultCurrencyTab(){
        return cy.get('a[id="icp-touch-link-cop"]');
    }
}

export default AccountPage;