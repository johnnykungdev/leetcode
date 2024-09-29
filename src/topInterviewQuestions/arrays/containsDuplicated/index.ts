// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

function containsDuplicate(nums: number[]): boolean {
  // solution 1
  // S(1)
  // const cachedObject: {
  //   [key: number]: boolean
  // } = {};

  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i]
  //   if (cachedObject[num]) {
  //     return true;
  //   } else {
  //     cachedObject[num] = true;
  //   }
  // }
  // return false;

  // solution 2
  nums.sort((a, b) => a - b);
  let cachedNum;
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (cachedNum === undefined) {
      cachedNum = currentNum;
      continue;
    }
    if (cachedNum !== currentNum) {
      cachedNum = currentNum;
      continue;
    }
    if (cachedNum === currentNum) {
      return true;
    }
  }
  return false;
}

export default containsDuplicate;