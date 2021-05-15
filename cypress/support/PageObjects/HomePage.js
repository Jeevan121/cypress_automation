class HomePage
{
    getMenuList(){
        return cy.get('#nav-hamburger-menu');
    }

    getSmartHomeLink(){
        return cy.get('ul[class="hmenu hmenu-visible"] a[class="hmenu-item"] div').contains('Smart Home');
    }

    getHomeEntertainmentLink(){
        return cy.get('ul[class="hmenu hmenu-visible hmenu-translateX"] a[class="hmenu-item"]').
        contains('Home Entertainment');
    }

    getTodaysDeals(){
        return cy.contains("Today's Deals");
    }

    getSearchDropDown(){
        return cy.get('select');
    }

    getSearchTextBox(){
        return cy.get('input[id="twotabsearchtextbox"]');
    }
}

export default HomePage;