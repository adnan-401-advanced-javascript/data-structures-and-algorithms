const binarySearch = require('../array-binary-search');
describe('test binary search', () => {
    it("valid case more", () => {
            expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    }),
    it("valid case less", () => {
            expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
    }),
    it("inValid case", () => {
            expect(binarySearch([1, 2, 3, 4, 5], 7)).toEqual(-1);
    }),
    it("empty array", () => {
            expect(binarySearch([], 0)).toBe("please provide an array");
    })
})
