function findIntersectionOfTwoArrays(nums1: number[], nums2: number[]): number[] {
  // basic solution
  const result: number[] = [];
  nums1.forEach((num) => {
    const targetIndex = nums2.indexOf(num);
    if (targetIndex > -1) {
      nums2.splice(targetIndex, 1);
      result.push(num);
    }
  });
  return result;
}

export default findIntersectionOfTwoArrays;