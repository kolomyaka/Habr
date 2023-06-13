import { Article } from '@/entities/Article';

const articleMocked = {
    'title': 'Test article',
    'subtitle': 'Тестовая статья',
    'userId': '1',
    'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    'views': 228,
    'createdAt': '21.03.2001',
    'type': [
        'IT'
    ],
    'blocks': []
};

export const createArticle = (article: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'qwe' },
        body: article ?? articleMocked
    }).then(res => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'qwe' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}