/// <reference types="Cypress" />
import  HomePage from '../../support/PageObjects/HomePage'
import HomeEnterAndSmartTVPage from '../../support/PageObjects/HomeEnterAndSmartTVPage'
import BaseTest from '../baseUtils/BaseTest'

describe('Smart Home',function()
{
    before(function(){
        cy.fixture('Scenario1.json').then(function(data){
            this.data=data
        })
    })

    it('TV results count',function(){
        
        //Creating the Page Object Instances
        const homePage = new HomePage()
        const homeEnterAndSmartTVPage = new HomeEnterAndSmartTVPage()
        const baseTst = new BaseTest();

        //Lunch the Application
        baseTst.launchApplication();
        cy.wait(2000)

        //clicking on the menu button from the home page
        homePage.getMenuList().invoke('show').click({force:true})
        //Clickin on the Smart Home Link
        homePage.getSmartHomeLink().click()
        //clicking on the Home Entertainment Link
        homePage.getHomeEntertainmentLink().click()
        //Clicking on the Smart TV's link from the Entertainmment page
        homeEnterAndSmartTVPage.getSmartTV().click()
        //Clicking on the see more results link from the bottom
        homeEnterAndSmartTVPage.getSeeResultsLink().click()
        //Validating the Total Results Displayed Count
        homeEnterAndSmartTVPage.getSearchResults().should('have.length',this.data.SearchResultCount)
       })
})
