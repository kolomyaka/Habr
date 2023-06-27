export { userActions, userReducer } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserRoles,
    getIsAdmin,
    getIsUser,
} from './model/selectors/getUserRoles/getUserRoles';
export { UserRoles } from './model/consts/userConsts';

export {
    getJsonSettingsByKey,
    getJsonSettings,
    useJsonSettings,
} from './model/selectors/getUserJsonSettings/getUserJsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';
