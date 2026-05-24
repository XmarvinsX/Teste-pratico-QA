describe('Fluxo de Autenticação - Teste Prático', () => {
  
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/'); 
  });

  it('Não deve permitir login com senha incorreta', () => {
    // Inserir e-mail válido e senha incorreta
    cy.get('#email').type('seu-email@teste.com');
    cy.get('#password').type('senha-errada');
    cy.get('button[type="submit"]').click();

    // Resultado Esperado: Validar mensagem de erro na tela
    cy.contains('E-mail ou senha inválidos').should('be.visible');
  });

  it('Deve realizar login com sucesso e redirecionar para o dashboard', () => {
    // Ação: Inserir credenciais e submeter
    cy.get('#email').type('qa@test.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();
    // Resultado após credencial, informa que o login está incorreto e questiona se deseja continuar.
     cy.get('button[type="button"]').click();
    // Resultado Esperado: Validar o redirecionamento e a mensagem de boas-vindas
    
  });

  
});