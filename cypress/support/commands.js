import CommonElements from './elements/CommonElements';
const commonElements = new CommonElements();

const acessaVVTest = () =>{
    cy.visit('/vvtest/');
    cy.get(commonElements.homeTitle()).should('contain.text','VV Test');
    cy.get(commonElements.homeDescription()).should('contain.text', 'Página de teste da Via Varejo');
}

Cypress.Commands.add('acessaVVTest', acessaVVTest);