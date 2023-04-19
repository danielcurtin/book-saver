describe('Main Page', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=JL2wo9KGenD4ya0vsuAP1IGxduivvAwS',{fixture: "lists.json"})
    .visit('http://localhost:3000/#/book/9781668001226');
  });

  it('User should be able to view book details', () => {
    cy.get('.sbook-title').should('contain', 'IT STARTS WITH US')
    .get('.sbook-ranking').should('contain', 'Currently #1')
    .get('.sbook-desc').should('contain', 'Lily deals with her jealous ex-husband');
  });
});