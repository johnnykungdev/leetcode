/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

 Do not return anything, modify nums in-place instead.


[0, 0, 0, 0, 0, 1, 3, 4]
 */
function moveZeroes(nums: number[]): void {
  // first solution, O(n^2)
  function switchIfZero(i: number) {
    let base = i;
    let column = i + 1;
    while(base < nums.length) {
      const num = nums[base];
      if (num !== 0) {
        break;
      }
      if (base === nums.length - 1 || column === nums.length) {
        break;
      }

      if (num === 0 && nums[column]) {
        nums[base] = nums[column];
        nums[column] = 0;
        base = column;
        column = base + 1;
      } else if (num === 0 && !nums[column]) {
        column++;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    switchIfZero(i);
  }

  // second solution

};

export default moveZeroes;