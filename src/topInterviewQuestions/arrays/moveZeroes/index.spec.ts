import moveZeroes from "./";

test('Example 1: Move zeroes to the end', () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test('Example 2: Single zero', () => {
  const nums = [0];
  moveZeroes(nums);
  expect(nums).toEqual([0]);
});

test('Example 3: All zeroes', () => {
  const nums = [0, 0, 0, 0, 0, 1, 3, 4];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 4, 0, 0, 0, 0, 0]);
});

test('Example 4: No zeroes', () => {
  const nums = [1, 2, 3, 4];
  moveZeroes(nums);
  expect(nums).toEqual([1, 2, 3, 4]); // No change expected
});

test('Example 5: Leading zeroes', () => {
  const nums = [0, 0, 1, 2, 3];
  moveZeroes(nums);
  expect(nums).toEqual([1, 2, 3, 0, 0]); // Zeroes moved to the end
});

test('Example 6: Mixed zeroes and negative numbers', () => {
  const nums = [0, -1, 0, -2, 3];
  moveZeroes(nums);
  expect(nums).toEqual([-1, -2, 3, 0, 0]); // Zeroes moved to the end
});