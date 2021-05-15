class AddToCartPage{

    getSuccessMessage(){
        return cy.get('h1[class="a-size-medium a-text-bold"]');
    }
}

export default AddToCartPage;