export const addComment = (commentText: string) => {
    cy.getByTestId('AddNewComment.Input').type(commentText);
    cy.getByTestId('AddNewComment.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(commentText: string): Chainable<void>;
        }
    }
}
