import * as ArticleCommands from './comands/article';
import * as commonCommands from './comands/common';
import * as ProfileCommands from './comands/profile';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(ProfileCommands);
Cypress.Commands.addAll(ArticleCommands);