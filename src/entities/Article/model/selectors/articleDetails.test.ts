import type { StateSchema } from 'app/providers/StoreProvider';

import { ArticleBlockType, ArticleType, Article } from '../types/article';

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return data', () => {
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
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы.'
                    ]
                },
                {
                    'id': '4',
                    'type': ArticleBlockType.CODE,
                    'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
                },
                {
                    'id': '5',
                    'type': ArticleBlockType.TEXT,
                    'title': 'Заголовок этого блока',
                    'paragraphs': [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц'
                    ]
                },
                {
                    'id': '2',
                    'type': ArticleBlockType.IMAGE,
                    'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    'title': 'Рисунок 1 - скриншот сайта'
                },
                {
                    'id': '3',
                    'type': ArticleBlockType.CODE,
                    'code': 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
                },
                {
                    'id': '7',
                    'type': ArticleBlockType.TEXT,
                    'title': 'Заголовок этого блока',
                    'paragraphs': [
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы.'
                    ]
                },
                {
                    'id': '8',
                    'type': ArticleBlockType.IMAGE,
                    'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    'title': 'Рисунок 1 - скриншот сайта'
                },
                {
                    'id': '9',
                    'type': ArticleBlockType.TEXT,
                    'title': 'Заголовок этого блока',
                    'paragraphs': [
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
                    ]
                }
            ]
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: data
            }
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});