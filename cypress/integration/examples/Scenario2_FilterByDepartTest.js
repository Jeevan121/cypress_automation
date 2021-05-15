/// <reference types="Cypress" />
import  HomePage from '../../support/PageObjects/HomePage'
import  DealsAndPromotionPage from '../../support/PageObjects/DealsAndPromotionPage'
import BaseTest from '../baseUtils/BaseTest'

describe('Filter By Department test',function()
{
    before(function(){
        cy.fixture('Scenario2.json').then(function(data){
            this.data=data
        })
    })

    it('Validate Software Department is selected or not',function(){

        //Creating the Page Object Instances
        const homePage = new HomePage();
        const dealsAndPromotionPage = new DealsAndPromotionPage();
        const baseTst = new BaseTest();
        
        //Lauching the application
        baseTst.launchApplication();
        cy.wait(2000)
        
        //Clicking on the Today'sDeals from the Home Page
        homePage.getTodaysDeals().focus().click({force: true})
        //Clicking on the See More Department from the Left Side of the page
        dealsAndPromotionPage.getSeeMoreDepartment().click({force: true})
        //Checking the Softwares check from the Department
        dealsAndPromotionPage.getSoftwareCheckBox().click()
        //Validating the Checked Department 
        dealsAndPromotionPage.getSelectedDepartment().
        should('include.text',this.data.software)
    })
})
