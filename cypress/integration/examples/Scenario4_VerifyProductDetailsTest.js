/// <reference types="Cypress" />
import HomePage from '../../support/PageObjects/HomePage'
import SearchResultPage from '../../support/PageObjects/SearchResultPage'
import AddToCartPage from '../../support/PageObjects/AddToCartPage'
import BaseTest from '../baseUtils/BaseTest'

describe('Search By Category',function()
{

    before(function(){
        cy.fixture('Scenario4.json').then(function(data){
            this.data=data
        })
    })

    it('Validate Searched Product Details And Add cart To functionality',function(){

        //Creating the Page Object Instances
        const homePage = new HomePage();
        const searchResPage = new SearchResultPage();
        const addTocartPage = new AddToCartPage();
        const baseTst = new BaseTest();

        //Launch the application
        baseTst.launchApplication();
        cy.wait(2000)
        
        //Selecting the Product Type from the Search Drop down and then selecting the product as Electronics
        homePage.getSearchDropDown().select(this.data.electronics, { force: true })
        //Entering the Search Keyword as Apple in the Search Textbox
        homePage.getSearchTextBox().type(this.data.searchKeyword+"{enter}")
        //Clicking the first product from the search result page
        searchResPage.getSearchResultsList(0).click({ force: true })
        //Navigating to the Selected Product and then validating the Default Currenct type as $
        searchResPage.getPriceDetails().should('be.visible').should('include.text',this.data.currencyType)
        //Validating the availablity of the product like in stock or out stock
        searchResPage.getAvailablityDetails().should('be.visible')
        .should('include.text',this.data.availablity)
        //Validating the Customer Reviews Details like ratings
        searchResPage.getCustomerReviews(0).should('be.visible').
        should('include.text',this.data.ratings)

        //Validating the Delivery  Address like Delivery To and then Dubai
        searchResPage.getDeliveryDetails(0).
        should('be.visible').should('include.text',this.data.deliveryTo) 
        //Validating the Delivery  Address like Dubai
        searchResPage.getDeliveryDetails(1).
        should('be.visible').should('include.text',this.data.country)
        //Validating the Add to cart button and then clicking
        searchResPage.getAddToCartButton().should('have.value',this.data.addTocart)
        .click()
        //Validating the Added Cart Message from the Add Cart Page
        addTocartPage.getSuccessMessage().should('include.text',this.data.addedToCart)
    })
})
