import twoSum from './index';

describe('twoSum', () => {
  test('Example 1: nums = [2,7,11,15], target = 9', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result).toHaveLength(2);
  });

  test('Example 2: nums = [3,2,4], target = 6', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
    expect(result).toHaveLength(2);
  });

  test('Example 3: nums = [3,3], target = 6', () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result).toHaveLength(2);
  });
});