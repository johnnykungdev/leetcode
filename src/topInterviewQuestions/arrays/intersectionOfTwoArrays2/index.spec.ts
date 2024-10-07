import findIntersectionOfTwoArrays from './index';

describe('findIntersectionOfTwoArrays', () => {
  it('should return the intersection of two arrays', () => {
    expect(findIntersectionOfTwoArrays([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(findIntersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    expect(findIntersectionOfTwoArrays([], [1, 2, 3])).toEqual([]);
    expect(findIntersectionOfTwoArrays([1, 2, 3], [])).toEqual([]);
    expect(findIntersectionOfTwoArrays([1, 1, 2, 2], [2, 2, 3, 3])).toEqual([2, 2]);
    const nums1 = [1, 2, 4, 4, 9];
    const nums2 = [1, 1, 2, 3, 4, 4, 8]
    const result = findIntersectionOfTwoArrays(nums1, nums2);
    expect(result).toEqual([1, 2, 4, 4])
  });

  it('should return the intersection of two arrays - case 2', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2];
    const result = findIntersectionOfTwoArrays(nums1, nums2);
    expect(result).toEqual([2])
  });
});