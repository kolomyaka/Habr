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

    it('И видит отображение комментириев', () => {
        cy.getByTestId('ArticleDetailsComment').should('exist');
        cy.getByTestId('ArticleDetailsComment').scrollIntoView();
    });

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Content').should('exist');
        cy.getByTestId('CommentList.Empty.Title').should('exist');
        cy.getByTestId('AddNewComment').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('exist');
    });

    it('И оставляет отзыв', () => {
        cy.getByTestId('ArticleDetails.Content').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.getByTestId('RatingCard').should('exist');
        cy.setRate(3, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});