import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {

    test('Should do initial request', async () => {
        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false
            }
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 1 });
    });

    test('dont should to do request, cause _inited = true', async () => {
        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true
            }
        });
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

});