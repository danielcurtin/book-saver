describe('Register Page', () => {
   
   beforeEach(() => {
      cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=JL2wo9KGenD4ya0vsuAP1IGxduivvAwS',{fixture: "lists.json"})
      .visit('http://localhost:3000/#/register');
   });
   
   it('Should require a 6 character password', () => {
      cy.get('#first-name').type('testing')
      .get('#email').type('test@testing.com')
      .get('#pass').type('pass')
      .get('.submit').click()
      .get('.error-code').should('contain', 'Password must be at least 6 characters');
   });

   it('Should require a valid email', () => {
      cy.get('#first-name').type('testing')
      .get('#email').type('test')
      .get('#pass').type('password')
      .get('.submit').click()
      .get('.error-code').should('contain', 'Invalid Email');
   });

   it('Should require a first name', () => {
      cy.get('#email').type('test@test.com')
      .get('#pass').type('password')
      .get('.submit').click()
      .get('.error-code').should('contain', 'Please enter a first name');
   });
});