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
  // function switchIfZero(i: number) {
  //   let base = i;
  //   let column = i + 1;
  //   while(base < nums.length) {
  //     const num = nums[base];
  //     if (num !== 0) {
  //       break;
  //     }
  //     if (base === nums.length - 1 || column === nums.length) {
  //       break;
  //     }

  //     if (num === 0 && nums[column]) {
  //       nums[base] = nums[column];
  //       nums[column] = 0;
  //       base = column;
  //       column = base + 1;
  //     } else if (num === 0 && !nums[column]) {
  //       column++;
  //     }
  //   }
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   switchIfZero(i);
  // }

  // second solution
  // let cachedObject: {
  //   [key: number]: number
  // } = {};
  // nums.forEach((num, index) => {
  //   if (num !== 0) {
  //     cachedObject[index] = num;
  //   }
  // });
  // const cachedKeys = Object.keys(cachedObject)
  //   .sort((a, b) => Number(a) - Number(b))
    
  //   cachedKeys.forEach((key, index) => {
  //     nums[index] = cachedObject[Number(key)];
  //   });
  //   for(let i = cachedKeys.length; i < nums.length; i++) {
  //     nums[i] = 0;
  //   }

  // third solution - TIMEOUT IN LEETCODE
  // const times = nums.filter((num) => num === 0);
  // times.forEach((time) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i];

  //     if (num === 0) {
  //       for (let j = i; j < nums.length - 1; j++) {
  //         console.log('nums', nums);
  //         nums[j] = nums[j+1];
  //       }
  //       nums[nums.length - 1] = 0;
  //     }
  //   }
  // })

  // fourth solution
  // This is similar to second solution
  // const additionalArr: number[] = [];
  // nums.forEach((num) => {
  //   if (num !== 0) {
  //     additionalArr.push(num);
  //   }
  // });
  // nums.forEach((num) => {
  //   if (num === 0) {
  //     additionalArr.push(num);
  //   }
  // });
  // additionalArr.forEach((num, index) => {
  //   nums[index] = num;
  // });

  // Fifth solution - Two pointer
  // let pointer1 = 0;
  // let pointer2 = 0;
  // while (pointer1 < nums.length && pointer2 < nums.length) {
  //   function movePointerTwoToNextNonZero() {
  //     if (nums[pointer2] && nums[pointer2] !== 0) {
  //       return;
  //     } else if (pointer2 === nums.length + 1) {
  //       return;
  //     }
  //     else {
  //       pointer2++;
  //       movePointerTwoToNextNonZero();
  //     }
  //   }

  //   function movePointerTwoToNextZero() {
  //     if (nums[pointer1] === 0) {
  //       return;
  //     } else if (pointer1 === nums.length + 1) {
  //       return;
  //     }
  //     else {
  //       pointer1++;
  //       movePointerTwoToNextZero()
  //     }
  //   }

  //   movePointerTwoToNextZero();
  //   movePointerTwoToNextNonZero();

  //   if (pointer1 > nums.length || pointer2 > nums.length) {
  //     break;
  //   }

  //   let temp;
  //   if (pointer2 > pointer1) {
  //     temp = nums[pointer1];
  //     nums[pointer1] = nums[pointer2];
  //     nums[pointer2] = temp;
  //   } else if (pointer1 > pointer2) {
  //     pointer2++;
  //   } else {
  //     pointer1++;
  //     pointer2++;
  //   }
  // }

  // Sixth solution - two pointer
  let temp, j = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0 && nums[j] === 0) {
      temp = nums[i];
      nums[j] = temp;
      nums[i] = 0;
    }
    if (nums[j] !== 0) {
      j++;
    }
  }
};

export default moveZeroes;