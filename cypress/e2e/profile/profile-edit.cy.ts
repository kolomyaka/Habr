import { resetProfile } from '../../support/comands/profile';

let profileId: string;

describe('Проверяем работу с профилем пользователя', () => {
    beforeEach(() => {
        cy.login().then((user) => {
            profileId = user.id;
            cy.visit(`/profile/${user.id}`);
        });
    });

    afterEach(() => {
        resetProfile(profileId);
    });

    it('Проверяем отобразился ли профиль после авторизации', () => {
        cy.getByTestId('ProfileCard.firstName').should('have.value', 'Test');
    });

    it('Проверяем обновление данных в профиле', () => {
        const newName = 'Nikita';
        const newLastName = 'Kolomoycev';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstName').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastName').should(
            'have.value',
            newLastName,
        );
    });
});
