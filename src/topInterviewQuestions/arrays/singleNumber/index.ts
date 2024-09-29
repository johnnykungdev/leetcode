// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums: number[]): number {
  // solution with S(n)
  const cachedObject: {
    [key: number]: number[]
  } = {
    1: [],
    2: [],
  };
  nums.forEach((num) => {
    if (!cachedObject[1].includes(num) && !cachedObject[2].includes(num)) {
      cachedObject[1].push(num);
    } else if (cachedObject[1].includes(num) && !cachedObject[2].includes(num)) {
      cachedObject[1] = cachedObject[1].filter(item => item !== num);
      cachedObject[2].push(num);
    }
  });

  return cachedObject[1][0];
}

export default singleNumber;