import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleBlockType, ArticleType, Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
    'id': '1',
    'title': 'Javascript news',
    'subtitle': 'Что нового в JS за 2022 год?',
    'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    'views': 1022,
    'user': {
        'id': '1',
        'username': 'Kolomyaka',
        'avatar': 'https://i.ytimg.com/vi/tXPUueXzmG8/maxresdefault.jpg'
    },
    'createdAt': '26.02.2022',
    'type': [ArticleType.IT],
    'blocks': [
        {
            'id': '1',
            'type': ArticleBlockType.TEXT,
            'title': 'Заголовок этого блока',
            'paragraphs': [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере.'
            ]
        },
        {
            'id': '4',
            'type': ArticleBlockType.CODE,
            'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            'id': '2',
            'type': ArticleBlockType.IMAGE,
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта'
        },
    ]
};

describe('articleDetailsSlice.test', () => {

    // Тестирование extra-reducers
    test('test update fetchArticleById service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error'
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            error: undefined,
            isLoading: true
        });
    });

    test('test fetchArticleById service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', '')
        )).toEqual({
            error: undefined,
            isLoading: false,
            data
        });
    });
});