import type { Country } from 'entities/Country';
import type { Currency } from 'entities/Currency';

export interface Profile {
    id?: string;
    first_name?: string;
    last_name?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?:  string;
    username?: string;
    avatar?: string;
}

