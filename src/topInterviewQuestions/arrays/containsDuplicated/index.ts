function containsDuplicate(nums: number[]): boolean {
  // S(1)
  const cachedObject: {
    [key: number]: boolean
  } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (cachedObject[num]) {
      return true;
    } else {
      cachedObject[num] = true;
    }
  }
  return false;
}

export default containsDuplicate;