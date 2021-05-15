class HomeEnterAndSmartTVPage{
    
    getSmartTV(){
        return cy.get('img[alt="Smart Televisions"]');
    }

    getSeeResultsLink(){
        return cy.contains('See all results');
    }

    getSearchResults(){
        return cy.get('div[class="a-section a-spacing-none"] h2');
    }

}

export default HomeEnterAndSmartTVPage;