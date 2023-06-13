describe('Пользователь заходит на страницу списка статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles/');
        });
    });

    it('И видит отображение статьей ', function () {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});