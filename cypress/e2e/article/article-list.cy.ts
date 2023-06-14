let articleId: string;

const testArticleForSearchTest = {
    title: 'JESTING SEARCH',
    subtitle: 'Тестовая статья',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 228,
    userId: '1',
    createdAt: '21.03.2001',
    type: ['IT'],
    blocks: [],
};

describe('Пользователь заходит на страницу списка статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles/');
        });
    });

    before(() => {
        cy.createArticle(testArticleForSearchTest).then((article) => {
            articleId = article.id;
        });
    });

    after(() => {
        cy.removeArticle(articleId);
    });

    it('И видит отображение статьей ', function () {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('И отфильтровывает статьи по типу ', function () {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.filterArticlesBy('IT');

        cy.getByTestId('ArticleListItemType.Description').contains('IT');
    });

    it('И пользуется поиском статей', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.getByTestId('ArticlesPageFilters.Search').type('JESTING SEARCH');
        cy.getByTestId('ArticleListItem.Loading').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length', 1);
        cy.getByTestId('ArticleListItem.Description').contains(
            'JESTING SEARCH',
        );
    });
});
