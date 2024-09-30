// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums: number[]): number {
  // solution with S(n)
  // const cachedObject: {
  //   [key: number]: number[]
  // } = {
  //   1: [],
  //   2: [],
  // };
  // nums.forEach((num) => {
  //   if (!cachedObject[1].includes(num) && !cachedObject[2].includes(num)) {
  //     cachedObject[1].push(num);
  //   } else if (cachedObject[1].includes(num) && !cachedObject[2].includes(num)) {
  //     cachedObject[1] = cachedObject[1].filter(item => item !== num);
  //     cachedObject[2].push(num);
  //   }
  // });

  // return cachedObject[1][0];

  // solution 2
  // O(n) and contant space
  let result = 0;
  nums.forEach((num) => {
    const occurence = nums.filter((ele) => ele === num);
    if (occurence.length === 1) {
      result = num;
    }
  });
  return result;
}

export default singleNumber;