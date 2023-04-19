describe('Main Page', () => {
    
    beforeEach(() => {
        cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=JL2wo9KGenD4ya0vsuAP1IGxduivvAwS', { fixture: 'lists.json' })
        .visit('http://localhost:3000/#/');
    });

    it('Should show the main page with a header', () => {
        cy.get('.page-title').contains('Book Saver');
    });

    it('User should be able to view different lists', () => {
        cy.get('.book-card').should('contain', 'IT STARTS WITH US')
        .get('[name="Test List 2"]').click()
        .get('.book-card').should('contain', 'OUTLIVE');
    });

    it('should take you to a new page with book details when you click on a book', () => {
        cy.get('.book-card').click();
    });
});
    
