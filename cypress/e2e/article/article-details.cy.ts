let currentArticleId: string;

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${currentArticleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('И видит содержимое статьи ', function () {
        cy.getByTestId('ArticleDetails.Content').should('exist');
    });

    it('И видит список рекомендованных статей ', function () {
        cy.getByTestId('ArticleDetailsRecommendations').should('exist');
    });
});