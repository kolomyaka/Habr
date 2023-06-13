

export const updateProfile = (firstName:string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}/`,
        headers: { Authorization: 'qwe' },
        body: {
            'id': '3',
            'first_name': 'Test',
            'last_name': 'User',
            'age': 22,
            'currency': 'RUB',
            'county': 'Russia',
            'city': 'Saint-Petersburg',
            'username': 'testUser',
            'avatar': 'https://i.ytimg.com/vi/tXPUueXzmG8/maxresdefault.jpg',
            'country': 'Russia'
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}