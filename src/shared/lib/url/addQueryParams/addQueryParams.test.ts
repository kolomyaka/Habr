import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('addQueryParams', () => {
    test('one param', () => {
        expect(getQueryParams({
            search: '123',
        })).toBe('?search=123');
    });

    test('multiply param', () => {
        expect(getQueryParams({
            search: '123',
            order: 'asc'
        })).toBe('?search=123&order=asc');
    });

    test('undefined param', () => {
        expect(getQueryParams({
            test: 'value',
            second: undefined
        })).toBe('?test=value');
    });
});