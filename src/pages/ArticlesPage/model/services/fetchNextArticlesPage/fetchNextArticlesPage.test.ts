import { TestAsyncThunk } from '@/shared/lib/tests';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('should return fulfilled request', async () => {
        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                view: 'small',
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
    });

    test('fetchArticleList not called', async () => {
        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticleList not called for of isLoading = true', async () => {
        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
