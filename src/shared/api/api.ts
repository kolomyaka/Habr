import axios from 'axios';
import { USER_LOCALSTORATE_KEY } from 'shared/const/localstorage';

// Настраиваем конфиг для axios
export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORATE_KEY)
    }
});