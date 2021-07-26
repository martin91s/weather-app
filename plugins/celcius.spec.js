import celcius from './celcius';

describe('plugins/celcius', () => {
    test('The value rounds and shows as celcius', () => {
        expect(celcius(34.24)).toEqual('34\u2103');
    });

    describe('If no value is given', () => {
        test('Returns empty string', () => {
            expect(celcius()).toEqual('');
        });
    });
});
