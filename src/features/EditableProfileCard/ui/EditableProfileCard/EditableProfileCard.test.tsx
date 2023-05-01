import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';



import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';


import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';


const mockData: Profile = {
    id: '1',
    first_name: 'admin',
    last_name: 'admin',
    age: 45,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: 'Saint-Petersburg',
    username: 'Kolomyaka'
};

describe('features/EditableProfileCard', () => {

    beforeEach(() => {
        componentRender(<EditableProfileCard id={'1'} />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: mockData,
                    form: mockData,
                },
                user: {
                    authData: {
                        id: '1',
                        username: 'Magnus'
                    }
                }
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
    });
    test('Отображени кнопки редактирования и отмены', async () => {
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
    });

    test('Возвращение значений при отмене редактирования формы', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'ADMIN LOH!');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
    });

    test('Отображения ошибки при некорректных данных при заполнении формы', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Description')).toBeInTheDocument();
    });

    test('Проверка вызова функции-запроса при верно веденных данных в форме', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'ADMIN Respect!');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'ADMIN KRASAVA!');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});