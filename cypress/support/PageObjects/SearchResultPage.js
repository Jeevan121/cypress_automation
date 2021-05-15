class SearchResultPage{

    getSearchResultsList(index){
        return cy.get('div[class="a-section a-spacing-medium"] a[class="a-link-normal s-no-outline"]').
        eq(index);
    }

    getPriceDetails(){
        return cy.get('span[id="price_inside_buybox"]');
    }

    getAvailablityDetails(){
        return cy.get('div[id="availability"] span');
    }

    getCustomerReviews(index){
        return cy.get('span[id="acrCustomerReviewText"]').eq(index);
    }

    getDeliveryDetails(index){
        return cy.get('div[id="contextualIngressPtLabel_deliveryShortLine"] span').eq(index)
    }

    getAddToCartButton(){
        return cy.get('input[id="add-to-cart-button"]');
    }

}

export default SearchResultPage;