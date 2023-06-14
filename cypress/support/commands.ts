import * as ArticleCommands from './comands/article';
import * as CommentsCommands from './comands/comments';
import * as commonCommands from './comands/common';
import * as ProfileCommands from './comands/profile';
import * as RateCommands from './comands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(ProfileCommands);
Cypress.Commands.addAll(ArticleCommands);
Cypress.Commands.addAll(CommentsCommands);
Cypress.Commands.addAll(RateCommands);
