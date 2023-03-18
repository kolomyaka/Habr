export interface User {
    id: string
    username: string
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    // Флаг, который будет зависеть от инициализации данных пользователя
    _inited: boolean;
}