class DealsAndPromotionPage{

    getSeeMoreDepartment(){
        return cy.contains("See more Department");
    }

    getSoftwareCheckBox(){
        return cy.get('span[class="a-label a-checkbox-label"]').contains("Software");
    }

    getSelectedDepartment(){
        return cy.get('div[id="FilterItemView_all_summary"] span[class="a-declarative"] span[class="a-text-bold"]');
    }

    getDeals(index){
        return cy.get('a[id="dealImage"]').eq(index);
    }

    getDealPrice(){
        return cy.get('span[class="a-price-symbol"]');
    }
}

export default DealsAndPromotionPage;