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
  const cache: {
    [key: number]: number
  } = {};
  nums2.forEach((num) => {
    if (cache[num] === undefined) {
      cache[num] = 1;
    } else {
      cache[num] += 1;
    }
  });

  const result: number[] = [];
  nums1.forEach((num) => {
    if (cache[num] && cache[num] > 0) {
      cache[num] -= 1;
      result.push(num);
    }
  });
  return result;

    // If nums1 and nums2 are sorted
  /* 
    For ex, nums1 = [1, 2, 4, 4 9];
    nums2 = [1, 1, 2, 3, 4, 4, 8]
  */
}

export default findIntersectionOfTwoArrays;