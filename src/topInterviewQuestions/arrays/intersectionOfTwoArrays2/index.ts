function findIntersectionOfTwoArrays(nums1: number[], nums2: number[]): number[] {
  // basic solution
  // const result: number[] = [];
  // nums1.forEach((num) => {
  //   const targetIndex = nums2.indexOf(num);
  //   if (targetIndex > -1) {
  //     nums2.splice(targetIndex, 1);
  //     result.push(num);
  //   }
  // });
  // return result;


  // Using cache, O(n) and S(n)
  // const cache: {
  //   [key: number]: number
  // } = {};
  // nums2.forEach((num) => {
  //   if (cache[num] === undefined) {
  //     cache[num] = 1;
  //   } else {
  //     cache[num] += 1;
  //   }
  // });

  // const result: number[] = [];
  // nums1.forEach((num) => {
  //   if (cache[num] && cache[num] > 0) {
  //     cache[num] -= 1;
  //     result.push(num);
  //   }
  // });
  // return result;


  // If nums1 and nums2 are sorted
  /* 
    For ex, nums1 = [1, 2, 4, 4 9];
    nums2 = [1, 1, 2, 3, 4, 4, 8]

    It's like a table
       1, 2, 2, 4, 4, 9
     1 X
     1 
     2    X
     3      
     4          X
     4              X
     8
  */
 nums1.sort((a, b) => a - b);
 nums2.sort((a, b) => a - b);
 console.log('nums1', nums1);
 const result = [];
 let cacheValidJ = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = cacheValidJ ; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        cacheValidJ = j + 1;
        break;
      } else if (nums1[i] > nums2[j]) {
        continue;
      } else {
        break;
      }
    }
  }
  return result;
}

export default findIntersectionOfTwoArrays;