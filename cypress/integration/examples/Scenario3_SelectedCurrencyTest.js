/// <reference types="Cypress" />
import AccountPage from '../../support/PageObjects/AccounPage'
import CurrencySettingsPage from '../../support/PageObjects/CurrencySettingsPage'
import HomePage from '../../support/PageObjects/HomePage'
import DealsAndPromotionPage from '../../support/PageObjects/DealsAndPromotionPage'
import BaseTest from '../baseUtils/BaseTest'

describe('Selected Currency test',function()
{

    before(function(){
        cy.fixture('Scenario3.json').then(function(data){
            this.data=data
        })
    })

    it('Validate Selected Currency is selected or not',function(){

        //Creating the Page Object Instances
        const accntPage = new AccountPage();
        const currencySettngsPage = new CurrencySettingsPage();
        const homePage = new HomePage();
        const dealsAndPromotionPage = new DealsAndPromotionPage();
        const baseTst = new BaseTest();

        //Launch the application
        baseTst.launchApplication();
        cy.wait(2000)
        //Navigate to the Accounts Page
        accntPage.getAccountLink().
        should('be.hidden').invoke('show').click({force: true})
        //Clicking the Default Currency Tab from the Bottom of the page
        accntPage.getDefaultCurrencyTab().click()
        //Clicking on the Currency drop down
        currencySettngsPage.getCurrencyDropDownList().click()
        //Selecting the AED as the currency type from the drop down
        currencySettngsPage.getSelectGivenCurrencyFromList(this.data.aedCurrency)
        .click()
        //Clicking on the Save Buttom from the Currency settings page
        currencySettngsPage.getCurrencySaveBtn().click({force: true})
        //Navigate to the Today's Deals Page
        homePage.getTodaysDeals().focus().click({force: true})
        //Clicking on the First deal from the Page
        dealsAndPromotionPage.getDeals(0).click()
        //Validating the Selected Currency As AED from the Today's Deals Detail Page
        dealsAndPromotionPage.getDealPrice().should('include.text',this.data.currencyType)
    })
})
