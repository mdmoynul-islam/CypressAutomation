//import cy from "cypress";
//import { describe } from "mocha";

describe('Test Suite',()=>{
    it('test title name positive',()=>{
        cy.visit("https://www.google.com")
        cy.title().should('eq','Google')      
    })
})
