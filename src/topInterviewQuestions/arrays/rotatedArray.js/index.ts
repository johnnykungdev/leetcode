/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Do not return anything, modify nums in-place instead.
 */

function rotate(nums: Array<number>, k: number) {
  // solution 1
  // const arrayLength = nums.length;
  // let result: Array<number> = [];

  // nums.forEach((num, index) => {
  //   let newIndex = index + k;
  //   const round = newIndex / arrayLength;
  //   if (round < 1) {
  //     result[newIndex] = num;
  //   } else {
  //     newIndex = newIndex % arrayLength;
  //     result[newIndex] = num;
  //   }
  // });
  // result.forEach((num, index) => nums[index] = num);


  // solution 2
  // [0, 1, 2, 3, 4] => { 1: 0 } => array[index] = array.length - 1 (when k = 1)
  /* 
    index = 0;
    { 1 : 0 } 
    num[0] = 4
    [4, 1, 2, 3, 4]

    index = 1;
    cache[index + 1] = nums[index];
    { 1 : 0 } => { 2: 1, 1: 0 }
    num[1] = cache[1]
    [4, 0, 2, 3, 4]
    { 2: 1 }

    index = 2;
    cache[3] = 2
    { 2: 1, 3: 2}
    num[2] = cache[2]
    { 3: 2 }
    ...
  */
  // [4, 0, 1, 2, 3] => 

  // 0, 1, 2, 3, 4
  // pre = 0
  // next = 1
  // 4, 1, 2, 3, 4

  // index = 1
  // 4, 1, 2, 3, 4
  // pre = 0, next = 1
  // 4, 0, 2, 3, 4
  // pre = 1
  // next = 2

  // index = 2
  // 4, 0, 1, 

  // 4, 0, 1, 2, 3

  const arrayLength = nums.length;
  for (let i = 0; i < k; i++) {
    const firstElement = nums[arrayLength - 1];
    let previousCachedNum: number;
    let nextCachedNum: number;
    nums.forEach((num: number, index: number) => {
      if (index + 1 <= arrayLength) {
        if (index === 0) {
          previousCachedNum = nums[index];
          nextCachedNum = nums[index + 1];
          nums[index] = firstElement;
        } else {
          nums[index] = previousCachedNum;
          previousCachedNum = nextCachedNum;
          nextCachedNum = nums[index + 1];
        }
      }
    });
  }
}

export default rotate;