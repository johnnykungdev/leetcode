/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

** Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

function twoSum(nums: number[], target: number): number[] {
  // first solution - O(n^2)
  // let result: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       result = [i, j];
  //     }
  //   }
  // }
  // return result;

  // second solution
  // let result: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   const remain = target - num;
  //   const remainIndex = nums.findIndex((n) => n === remain);
  //   if (remainIndex !== -1 && i !== remainIndex) {
  //     result = [i, remainIndex];
  //     break;
  //   }
  // }
  // return result;

  //third solution - with object or map
  let cached: {
    [key: string]: number
  } = {};
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remain = target - num;

    if (cached[remain] === undefined) {
      cached[num] = i;
    } else {
      result = [i, cached[remain]].sort((a, b) => a - b)
    }
  }
  return result;
};

export default twoSum;