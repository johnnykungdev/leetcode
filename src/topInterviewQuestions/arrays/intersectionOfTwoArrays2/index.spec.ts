import findIntersectionOfTwoArrays from './index';

describe('findIntersectionOfTwoArrays', () => {
  it('should return the intersection of two arrays', () => {
    expect(findIntersectionOfTwoArrays([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(findIntersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    expect(findIntersectionOfTwoArrays([], [1, 2, 3])).toEqual([]);
    expect(findIntersectionOfTwoArrays([1, 2, 3], [])).toEqual([]);
    expect(findIntersectionOfTwoArrays([1, 1, 2, 2], [2, 2, 3, 3])).toEqual([2, 2]);
  });
});