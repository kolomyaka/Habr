import { TestAsyncThunk } from '@/shared/lib';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('Should do initial request', async () => {
        // Создаем экземпляр нашего класса и передаем санку
        const searchParams = new URLSearchParams();
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
                view: 'small'
            }
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk(searchParams);
        expect(thunk.dispatch).toBeCalledTimes(4);
    });

    test('dont should to do request, cause _inited = true', async () => {
        const searchParams = new URLSearchParams();
        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
                view: 'small'
            }
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk(searchParams);
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

});