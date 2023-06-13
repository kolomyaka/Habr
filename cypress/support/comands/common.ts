import { User } from '@/entities/User';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username = 'testUser', password = '123') => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

export const getByTestId = (dataTestId: string) => {
    return cy.get(selectByTestId(dataTestId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(dataTestId:string): Chainable<JQuery<HTMLElement>>;
        }
    }
}