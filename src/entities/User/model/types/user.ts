import { FeatureFlags } from '@/shared/types/featureFlags';

import { UserRoles } from '../consts/userConsts';

import { JsonSettings } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRoles[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    // Флаг, который будет зависеть от инициализации данных пользователя
    _inited: boolean;
}
