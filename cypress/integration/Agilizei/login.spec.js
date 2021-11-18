/// <reference types="cypress"/>
import elemento from '../Agilizei/elementos-login'
//**https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
describe('Twitter clone - login', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      beforeEach(() => {
        cy.intercept({
            method:'GET',
            hostname:'res.cloudinary.com'
        },
        {
            statusCode: 200,
            fixture: 'losango'
        }).as('cloud')
      });
    it('login com usuario valido', () => { 
        cy.login()
        cy.visit('/');
    });

});