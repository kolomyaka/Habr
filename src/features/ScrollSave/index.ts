export type { ScrollSaveSchema } from './model/types/ScrollSaveSchema';

export {
    scrollSaveReducer,
    scrollSaveActions,
} from './model/slices/scrollSaveSlice';

export { getScrollSaveByPath } from './model/selectors/scrollSaveSelectors';
