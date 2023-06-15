## Запуск проекта

```
npm install - Устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - Запуск проекта
```

---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend + storybook
- `npm run stat:dev:vite` - Запуск frontend проекта на vite + backend 
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod-режиме
- `npm run build:dev` - Сборка в dev-режиме
- `npm run prettier` - Форматирование кода с помощью prettier
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style-линтером
- `npm run lint:scss:fix` - Исправление scss файлов style-линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:e2e` - Запуск e2e тестов с cypress
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тетсов
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка Storybook билда

--- 

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs)

--- 

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами храняться в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode.

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты 

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library - `npm run test:unit`
3) Скриншотное тестирование с loki - `npm run test:ui`
4) e2e тестирование с Cypress - `npm run test:e2e`

--- 

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями. 

Так же для строгого контроля главных архитектурных принципов используются eslint-плагины, которые содержат 2 правила.
1) boundaries/element-types - Проверяет корректность использования слоев с точки зрения FSD (Доступ к низлежащим слоям)
2) no-restricted-imports - Разрешает импорт из других модулей только из public api.

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](https://storybook.js.org/)

Пример [Стори-кейса](docs/storybook.md)

--- 

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - Конфигурация webpack
- /config/jest - Конфигурация тестовой среды
- /config/storybook - Конфигурация сторибука

В папке `script` находятся разлиные скрипты для рефакторинга/упрощения написания кода/генерации отчетов и т.д

--- 

## CI pipeline и pre-commit хуки

Конфигурация github actions находится в /.github/workflows. В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами с помощью husky.

---

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности
переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK Query](src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (Чтобы не тянуть их в общий бандл)
используется [DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Сущности (entities)

- [Article](src/entities/Article)
- [Comment](src/entities/Comment)
- [Country](src/entities/Country)
- [Currency](src/entities/Currency)
- [Notification](src/entities/Notification)
- [Profile](src/entities/Profile)
- [Rating](src/entities/Rating)
- [User](src/entities/User)

## Фичи (features)

- [articleRating](src/features/Rating/ArticleRating)
- [articleRecommendationList](src/features/ArticleDetailsRecommendations)
- [AuthByUsername](src/features/AuthByUsername)
- [AvatarDropdown](src/features/AvatarDropdown)
- [EditableProfileCard](src/features/EditableProfileCard)
- [LangSwitcher](src/features/LangSwitcher)
- [ThemeSwitcher](src/features/ThemeSwitcher)
- [ScrollSave](src/features/ScrollSave)
- [NotificationButton](src/features/NotificationButton)