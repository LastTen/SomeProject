import Login from "../pageObject/Login.js"
const log = new Login

describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://google.com')
        log.typeText('hhghghgh')
    })
})