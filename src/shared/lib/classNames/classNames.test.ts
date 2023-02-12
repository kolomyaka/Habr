import { classNames } from './classNames';

describe('classNames', () => {
    test('check cls', () => {
        expect(classNames('qwe')).toBe('qwe');
    });

    test('check mods', () => {
        expect(classNames('qwe', { hovered: true })).toBe('qwe hovered');
    });

    test('check additional', () => {
        const expected = 'qwe upper middle hovered';
        expect(classNames(
            'qwe',
            { hovered:true, collapsed: false },
            ['upper', 'middle']))
            .toBe(expected);
    });
});