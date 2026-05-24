describe('Fluxo de Autenticação - Teste Prático', () => {
  // Pré-condição: Executado antes de cada teste
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/'); 
  });

it('Deve validar comportamento do botão "Esqueceu sua senha?"', () => {

  // Validar existência do botão/link
  cy.contains('Esqueceu sua senha?')
    .should('be.visible')
    .click();

  // Validar que nenhuma navegação ocorreu
  cy.url().should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/');

});

});