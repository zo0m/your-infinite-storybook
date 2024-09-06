import { areDefined, isDefined } from './shared-utils-is-defined';

describe('sharedUtilsIsDefined', () => {
    it('is value defined', () => {
        expect(isDefined({})).toEqual(true);
    });
    it('is null value not defined', () => {
        expect(isDefined(null)).toEqual(false);
    });
    it('is undefined value non-defined', () => {
        expect(isDefined(undefined)).toEqual(false);
    });
    it('are values defined', () => {
        expect(areDefined({}, {})).toEqual(true);
    });
    it('are null values not defined', () => {
        expect(areDefined({}, null)).toEqual(false);
    });
    it('are undefined values non-defined', () => {
        expect(areDefined({}, undefined, {})).toEqual(false);
    });
});
