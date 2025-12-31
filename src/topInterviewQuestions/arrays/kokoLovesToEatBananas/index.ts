/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
*/

function minEatingSpeed(piles: number[], h: number): number {
  // Max k would be the max number of a pile of bananas
  // do a binary search between 1 and max k

  let k = 1;
  let totalHour = 0;
  let maxPile = 0;

  piles.forEach((bananas) => {
    totalHour += bananas;
    if (bananas > maxPile) {
      maxPile = bananas;
    }
  });
  console.log('first totalHours', totalHour)
  while(maxPile > k) {
    const midValue = Math.round((maxPile + k) / 2);
    const hours = piles.reduce((prev, bananas) => {
      return prev + Math.round(bananas/midValue);
    }, 0);
    console.log('hours', hours, midValue);
    if (hours > h) {
      k = midValue + 1;
    } else {
      maxPile = midValue;
    }
  }
  return k;
};

export default minEatingSpeed;