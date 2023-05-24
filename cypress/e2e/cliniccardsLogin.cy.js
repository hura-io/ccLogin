it('Логін з пустими полями Email та Password', () => {
  cy.visit('https://cliniccards.com/');

  cy.log("Відкриття форми авторизації");
  cy.get('#newMenuTopLine #loginButton').click();
  
  cy.log("Спроба авторизації без заповнення форми авторизації");
  cy.get('[type=submit]').click();

  cy.log("Поле Email містить повідомлення про помилку та виділено червоним кольором");
  cy.get('[id=emailError]').should('contain', 'Введіть коректний Email');
  cy.get('.fa-regular.fa-envelope').invoke('css', 'color').should('be.eq', 'rgb(243, 86, 93)');

  cy.log("Поле Password містить повідомлення про помилку та виділено червоним кольором");
  cy.get('.form-group.has-error span.help-block:not(#emailError)').should('contain', 'Введіть пароль') 
  cy.get('.fa-regular.fa-lock').invoke('css', 'color').should('be.eq', 'rgb(243, 86, 93)');
})