const { get } = require("http")

describe('Teste de automação da pagina do google em uma pesquisa', () => {
    it('Acessar a página do google', () => {
      cy.visit('https://www.google.com')
      cy.contains('Gmail')
      cy.get('.gLFyf').type('O que é vida{enter}')
      cy.get('.byDyWd').click()
      cy.get('[href="https://pt.khanacademy.org/science/biology/intro-to-biology/what-is-biology/a/what-is-life"] > .LC20lb').scrollIntoView().should('be.visible').click()
                     
    })
  })