import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// Т.к компонент обернут в мемо, то у lazy как generic указываем пропсы нашего компонента
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));